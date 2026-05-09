import {
  useParams,
  Link,
} from "react-router-dom"

import {
  useMovieDetail,
} from "../hooks/useMovieDetail"

export default function MovieDetail() {
  const { id } =
    useParams()

  const {
    data: movie,
    isLoading,
    error,
  } = useMovieDetail(id)

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500">
        Failed to load movie
      </div>
    )
  }

  const imageUrl =
    movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Image"

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <Link
        to="/"
        className="inline-block mb-6 px-4 py-2 rounded bg-[#FF9BD2] hover:bg-[#FDB5CE] transition"
      >
        Back
      </Link>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <img
          src={imageUrl}
          alt={movie.title}
          className="rounded-2xl w-full"
        />

        <div>
          <h1 className="text-5xl font-black mb-4">
            {movie.title}
          </h1>

          <p className="text-zinc-400 mb-4">
            {movie.release_date}
          </p>

          <div className="flex gap-2 flex-wrap mb-6">
            {movie.genres?.map(
              (genre) => (
                <span
                  key={genre.id}
                  className="bg-[#FF9BD2] text-white px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              )
            )}
          </div>

          <p className="leading-7 text-zinc-300 mb-6">
            {movie.overview}
          </p>

          <div className="space-y-3">

            <p>
              ⭐ Rating:
              {" "}
              {movie.vote_average}
            </p>

            <p>
              🎬 Popularity:
              {" "}
              {movie.popularity}
            </p>

            <p>
              🕒 Runtime:
              {" "}
              {movie.runtime} min
            </p>

            <p>
              🌍 Language:
              {" "}
              {
                movie.original_language
              }
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}