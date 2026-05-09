import { useState, useEffect } from "react"
import { useDebounce } from "use-debounce"

import SearchBar from "../components/SearchBar"
import MovieCard from "../components/MovieCard"

import { useMovies } from "../hooks/useMovies"

export default function Home() {
  const [search, setSearch] =
    useState("")

  const [page, setPage] =
    useState(1)

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

  const getPageNumbers = () => {
    const pages = []

    const maxVisiblePages = 3

    let startPage = Math.max(
      page - 2,
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff9bd233_0%,#000000_55%)]"></div>

        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#FF9BD2]/20 rounded-full blur-3xl"></div>

        <div className="absolute top-[40%] right-[-100px] w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-150px] left-[30%] w-[300px] h-[300px] bg-fuchsia-500/10 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>

        <div className="absolute inset-0 backdrop-blur-[3px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto p-5">

        <h1 className="text-5xl md:text-6xl font-black mb-3 text-white tracking-tight">
          Smart Movie Search
        </h1>

        <p className="text-zinc-400 mb-8 text-lg">
          Discover trending movies from around the world
        </p>

        <SearchBar
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        {error && (
          <p className="mt-5 text-red-500">
            Something went wrong
          </p>
        )}

        {!isLoading &&
          data?.results?.length ===
            0 && (
            <p className="mt-5 text-white">
              Movie not found
            </p>
          )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
          {isLoading
            ? Array.from({
                length: 8,
              }).map((_, index) => (
                <div
                  key={index}
                  className="bg-black border border-zinc-800 rounded-2xl overflow-hidden shadow-lg animate-pulse"
                >
                  <div className="w-full h-80 bg-zinc-800"></div>

                  <div className="p-4">
                    <div className="h-5 bg-zinc-700 rounded w-3/4 mb-3"></div>

                    <div className="h-4 bg-zinc-800 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            : data?.results?.map(
                (movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                  />
                )
              )}
        </div>

        {!isLoading &&
          data?.results?.length >
            0 && (
            <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">

              <button
                onClick={() =>
                  setPage(1)
                }
                disabled={
                  page === 1
                }
                className="px-4 py-2 rounded bg-[#FF9BD2] hover:bg-[#FDB5CE] text-white disabled:opacity-50 transition"
              >
                First
              </button>

              <button
                onClick={() =>
                  setPage((prev) =>
                    Math.max(
                      prev - 1,
                      1
                    )
                  )
                }
                disabled={
                  page === 1
                }
                className="px-4 py-2 rounded bg-[#FF9BD2] hover:bg-[#FDB5CE] text-white disabled:opacity-50 transition"
              >
                Prev
              </button>

              {getPageNumbers().map(
                (
                  pageNumber
                ) => (
                  <button
                    key={
                      pageNumber
                    }
                    onClick={() =>
                      setPage(
                        pageNumber
                      )
                    }
                    className={`px-4 py-2 rounded transition ${
                      page ===
                      pageNumber
                        ? "bg-[#FF9BD2] text-white"
                        : "bg-white border hover:border-[#FF9BD2]"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}

              {totalPages >
                5 &&
                page <
                  totalPages -
                    2 && (
                  <>
                    <span className="px-2 text-white">
                      ...
                    </span>

                    <button
                      onClick={() =>
                        setPage(
                          totalPages
                        )
                      }
                      className={`px-4 py-2 rounded transition ${
                        page ===
                        totalPages
                          ? "bg-[#FF9BD2] text-white"
                          : "bg-white border hover:border-[#FF9BD2]"
                      }`}
                    >
                      {
                        totalPages
                      }
                    </button>
                  </>
                )}

              <button
                onClick={() =>
                  setPage((prev) =>
                    Math.min(
                      prev + 1,
                      totalPages
                    )
                  )
                }
                disabled={
                  page ===
                  totalPages
                }
                className="px-4 py-2 rounded bg-[#FF9BD2] hover:bg-[#FDB5CE] text-white disabled:opacity-50 transition"
              >
                Next
              </button>
            </div>
          )}
      </div>
    </div>
  )
}