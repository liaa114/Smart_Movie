import { useState } from "react"
import { useDebounce } from "use-debounce"

import SearchBar from "../components/SearchBar"
import MovieCard from "../components/MovieCard"

import { useMovies } from "../hooks/useMovies"

export default function Home() {
  const [search, setSearch] = useState("")
  const [page] = useState(1)

  const [debouncedSearch] = useDebounce(
    search,
    500
  )

  const {
    data,
    isLoading,
    error,
  } = useMovies(debouncedSearch, page)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-5">
        <h1 className="text-4xl font-bold mb-5">
          Smart Movie Search
        </h1>

        <SearchBar
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {isLoading && (
          <p className="mt-5">
            Loading...
          </p>
        )}

        {error && (
          <p className="mt-5 text-red-500">
            Something went wrong
          </p>
        )}

        {data?.Response === "False" && (
          <p className="mt-5">
            Movie not found
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
          {data?.Search?.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  )
}