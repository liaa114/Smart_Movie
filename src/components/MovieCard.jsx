export default function MovieCard({
  movie,
}) {
  const imageUrl =
    movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Image"

  return (
    <div className="bg-black/70 backdrop-blur-sm border border-zinc-800 rounded-xl shadow-lg
        overflow-hidden hover:scale-105 hover:border-[#FF9BD2] transition duration-300">

      <img
        src={imageUrl}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-3">
        <h2 className="font-semibold text-sm text-white line-clamp-1">
          {movie.title}
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          {movie.release_date
            ? movie.release_date.slice(
                0,
                4
              )
            : "Unknown"}
        </p>
      </div>
    </div>
  )
}