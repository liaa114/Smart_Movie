export default function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-80 object-cover"
      />

      <div className="p-3">
        <h2 className="font-bold text-lg">
          {movie.Title}
        </h2>

        <p className="text-gray-500">
          {movie.Year}
        </p>
      </div>
    </div>
  )
}