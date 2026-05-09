import MovieCard from "./MovieCard"

export default function MoviesGrid({
  movies,
  isLoading,
  showFavorites,
}) {
  return (
    <div
      className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      xl:grid-cols-5
      gap-5
      mt-8
      "
    >
      {isLoading &&
      !showFavorites
        ? Array.from({
            length: 8,
          }).map((_, index) => (
            <div
              key={index}
              className="
              bg-black/40
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              backdrop-blur-xl
              animate-pulse
              "
            >
              <div className="w-full h-80 bg-zinc-800"></div>

              <div className="p-4">

                <div className="h-5 bg-zinc-700 rounded w-3/4 mb-3"></div>

                <div className="h-4 bg-zinc-800 rounded w-1/2"></div>

              </div>

            </div>
          ))
        : movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
    </div>
  )
}