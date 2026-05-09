import { useState, useEffect } from "react"
import { useDebounce } from "use-debounce"

import HeroSection from "../components/HeroSection"
import MoviesGrid from "../components/MoviesGrid"
import Pagination from "../components/Pagination"
import EmptyState from "../components/EmptyState"
import SectionTitle from "../components/SectionTitle"
import BackgroundEffects from "../components/BackgroundEffects"

import { useMovies } from "../hooks/useMovies"

import { getTrendingMovies } from "../api/tmdb"

import {
  getFavorites,
} from "../utils/favorites"

export default function Home() {
  const [search, setSearch] =
    useState("")

  const [page, setPage] =
    useState(1)

  const [showFavorites,
    setShowFavorites] =
    useState(false)

  const [favorites,
    setFavorites] =
    useState([])

  const [trending,
    setTrending] =
    useState([])

  const [debouncedSearch] =
    useDebounce(search, 500)

  useEffect(() => {
    setPage(1)
  }, [debouncedSearch])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [page])

  useEffect(() => {
    const updateFavorites = () => {
      setFavorites(
        getFavorites()
      )
    }

    updateFavorites()

    window.addEventListener(
      "favoritesUpdated",
      updateFavorites
    )

    return () => {
      window.removeEventListener(
        "favoritesUpdated",
        updateFavorites
      )
    }
  }, [])

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendingMovies =
          await getTrendingMovies()

        setTrending(
          trendingMovies.results
        )
      } catch (error) {
        console.error(error)
      }
    }

    if (
      !debouncedSearch &&
      !showFavorites
    ) {
      fetchTrending()
    }
  }, [debouncedSearch, showFavorites])

  const {
    data,
    isLoading,
    error,
  } = useMovies(
    debouncedSearch,
    page
  )

  const totalPages =
    data?.total_pages || 1

  const movies =
    showFavorites
      ? favorites
      : debouncedSearch
        ? data?.results || []
        : trending

  const getPageNumbers = () => {
    const pages = []

    const maxVisiblePages = 3

    let startPage = Math.max(
      page - 1,
      1
    )

    let endPage = Math.min(
      startPage +
      maxVisiblePages -
      1,
      totalPages
    )

    if (
      endPage - startPage <
      maxVisiblePages - 1
    ) {
      startPage = Math.max(
        endPage -
        maxVisiblePages +
        1,
        1
      )
    }

    for (
      let i = startPage;
      i <= endPage;
      i++
    ) {
      pages.push(i)
    }

    return pages
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <BackgroundEffects />
      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-14 pb-10">

        <HeroSection
          search={search}
          setSearch={setSearch}
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
          favorites={favorites}
          setFavorites={setFavorites}
          getFavorites={getFavorites}
        />

        <EmptyState
          error={error}
          isLoading={isLoading}
          movies={movies}
          showFavorites={showFavorites}
          debouncedSearch={debouncedSearch}
        />

        <SectionTitle
          isLoading={isLoading}
          movies={movies}
          showFavorites={showFavorites}
        />

        <MoviesGrid
          movies={movies}
          isLoading={isLoading}
          showFavorites={showFavorites}
        />

        {!showFavorites &&
          !isLoading &&
          movies.length > 0 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              setPage={setPage}
              getPageNumbers={getPageNumbers}
            />
          )}

      </div>

    </div>
  )
}