import {
  useParams,
  Link,
} from "react-router-dom"

import {
  useMovieDetail,
} from "../hooks/useMovieDetail"

import {
  useMovieCredits,
} from "../hooks/useMovieCredits"

export default function MovieDetail() {

  const { id } =
    useParams()

  const {
    data: movie,
    isLoading,
    error,
  } = useMovieDetail(id)

  const {
    data: credits,
  } = useMovieCredits(id)

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

      {/* back button */}
      <Link
        to="/"
        className="
          inline-block
          mb-6
          px-4
          py-2
          rounded
          bg-[#FF9BD2]
          hover:bg-[#FDB5CE]
          transition
        "
      >
        Back
      </Link>

      {/* content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* poster */}
        <img
          src={imageUrl}
          alt={movie.title}
          className="rounded-2xl w-full"
        />

        {/* detail */}
        <div>

          {/* title */}
          <h1 className="text-5xl font-black mb-4">
            {movie.title}
          </h1>

          {/* release */}
          <p className="text-zinc-400 mb-4">
            {movie.release_date}
          </p>

          {/* genres */}
          <div className="flex gap-2 flex-wrap mb-6">

            {movie.genres?.map(
              (genre) => (
                <span
                  key={genre.id}
                  className="
                    bg-[#FF9BD2]
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  {genre.name}
                </span>
              )
            )}

          </div>

          {/* overview */}
          <p className="leading-7 text-zinc-300 mb-6">
            {movie.overview}
          </p>

          {/* info */}
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
              {movie.original_language}
            </p>

          </div>

          {/* cast */}
          <div className="mt-14">

            <p className="
              text-[#FFE45E]
              text-sm
              tracking-[4px]
              uppercase
              mb-4
            ">
              Featuring
            </p>

            <h2 className="text-3xl font-black mb-8">
              Cast
            </h2>

            <div className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-5
            ">

              {credits?.cast
                ?.slice(0, 8)
                .map((actor) => {

                  const actorImage =
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : "https://via.placeholder.com/300x300?text=No+Image"

                  return (
                    <div
                      key={actor.cast_id}
                      className="text-center"
                    >

                      <img
                        src={actorImage}
                        alt={actor.name}
                        className="
                          w-28
                          h-28
                          rounded-full
                          object-cover
                          mx-auto
                          border-4
                          border-transparent
                          hover:border-[#FF9BD2]
                          transition
                        "
                      />

                      <h3 className="
                        mt-2
                        font-semibold
                        text-white
                        text-sm
                      ">
                        {actor.name}
                      </h3>

                      <p className="
                        text-xs
                        text-zinc-400
                        mt-1
                      ">
                        {actor.character}
                      </p>

                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}