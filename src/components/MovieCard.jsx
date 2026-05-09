export default function MovieCard({
  movie,
}) {
  const imageUrl =
    movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Image"

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      <div className="p-3">
        <h2 className="font-bold text-lg">
          {movie.title}
        </h2>

        <p className="text-gray-500">
          {movie.release_date
            ? movie.release_date.slice(0, 4)
            : "Unknown"}
        </p>
      </div>
    </div>
  )
}