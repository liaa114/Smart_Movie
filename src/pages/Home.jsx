import { useState, useEffect } from "react"
import { useDebounce } from "use-debounce"
import { Search } from "lucide-react"

import MovieCard from "../components/MovieCard"

import { useMovies } from "../hooks/useMovies"

function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative group">

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition duration-500"></div>

      <Search
        size={18}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search movies..."
        className="
        w-full
        h-14
        pl-14
        pr-5
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        text-white
        placeholder:text-zinc-500
        text-sm
        outline-none
        transition-all
        duration-300
        focus:border-[#FF9BD2]/60
        focus:bg-white/[0.07]
        focus:shadow-[0_0_30px_rgba(255,155,210,0.15)]
        "
      />
    </div>
  )
}

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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff9bd233_0%,#000000_55%)]"></div>

      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#FF9BD2]/20 rounded-full blur-3xl"></div>

      <div className="absolute top-[40%] right-[-100px] w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-150px] left-[30%] w-[300px] h-[300px] bg-fuchsia-500/10 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>

      <div className="absolute inset-0 backdrop-blur-[3px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-14 pb-10">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-5">
              <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>

              <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                Smart Movie Platform
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.06em] leading-none text-white">
              Smart Movie
              <span className="text-[#FF9BD2]">
                {" "}Search
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-zinc-500 max-w-lg leading-relaxed font-light">
              Discover trending movies and explore cinematic experiences from around the world.
            </p>

          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">

            <div className="w-full lg:w-[430px]">
              <SearchBar
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />
            </div>

            <button
              className="
              h-14
              px-5
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              text-white
              hover:border-[#FF9BD2]/40
              hover:bg-[#FF9BD2]/10
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-2
              shrink-0
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#FF9BD2]"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>

              <span className="hidden sm:block text-sm font-medium">
                Favorites
              </span>
            </button>

          </div>

        </div>

        <div className="mt-6">

          {error && (
            <p className="text-sm text-red-400">
              Something went wrong
            </p>
          )}

          {!isLoading &&
            data?.results?.length ===
              0 && (
              <p className="text-sm text-zinc-300">
                Movie not found
              </p>
            )}

        </div>

        {!isLoading &&
          data?.results?.length >
            0 && (
            <div className="flex items-center gap-3 mt-10 text-sm text-zinc-400">
              <div className="w-10 h-[1px] bg-zinc-700"></div>

              <span>
                Popular Results
              </span>
            </div>
          )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 mt-8">

          {isLoading
            ? Array.from({
                length: 8,
              }).map((_, index) => (
                <div
                  key={index}
                  className="bg-black/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl animate-pulse"
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
            <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">

              <button
                onClick={() =>
                  setPage(1)
                }
                disabled={
                  page === 1
                }
                className="
                px-4
                py-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-white
                hover:border-[#FF9BD2]/40
                hover:bg-[#FF9BD2]/10
                disabled:opacity-50
                transition
                "
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
                className="
                px-4
                py-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-white
                hover:border-[#FF9BD2]/40
                hover:bg-[#FF9BD2]/10
                disabled:opacity-50
                transition
                "
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
                    className={`px-4 py-2 rounded-xl transition ${
                      page ===
                      pageNumber
                        ? "bg-[#FF9BD2] text-white"
                        : "bg-white/5 border border-white/10 text-white hover:border-[#FF9BD2]/40 hover:bg-[#FF9BD2]/10"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
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
                className="
                px-4
                py-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-white
                hover:border-[#FF9BD2]/40
                hover:bg-[#FF9BD2]/10
                disabled:opacity-50
                transition
                "
              >
                Next
              </button>

              <button
                onClick={() =>
                    setPage(totalPages)
                }
                disabled={
                    page === totalPages
                }
                className="
                px-4
                py-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-white
                hover:border-[#FF9BD2]/40
                hover:bg-[#FF9BD2]/10
                disabled:opacity-50
                transition
                "
                >
                Last
              </button>

            </div>
          )}

      </div>

    </div>
  )
}