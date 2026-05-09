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

    const maxVisiblePages = 5

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
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-5">
        <h1 className="text-4xl font-bold mb-5">
          Smart Movie Search
        </h1>

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
            <p className="mt-5">
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
                  className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse"
                >
                  <div className="w-full h-80 bg-gray-300"></div>

                  <div className="p-3">
                    <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>

                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
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
                className="px-4 py-2 rounded bg-gray-300 disabled:opacity-50"
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
                        ? "bg-blue-500 text-white"
                        : "bg-white border"
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
                    <span className="px-2">
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
                          ? "bg-blue-500 text-white"
                          : "bg-white border"
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
                className="px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
      </div>
    </div>
  )
}