import { useState } from "react"

import { Link } from "react-router-dom"

import { Heart } from "lucide-react"

import {
  isFavorite,
  toggleFavorite,
} from "../utils/favorites"

export default function MovieCard({
  movie,
}) {
  const imageUrl =
    movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Image"

  const [favorite, setFavorite] =
    useState(
      isFavorite(movie.id)
    )

  const handleFavorite = (
    e
  ) => {
    e.preventDefault()

    toggleFavorite(movie)

    setFavorite(
      !favorite
    )
  }

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group"
    >
      <div
        className="
        relative
        bg-black/70
        backdrop-blur-sm
        border
        border-zinc-800
        rounded-3xl
        shadow-lg
        overflow-hidden
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:border-[#FF9BD2]/60
        hover:shadow-[0_0_30px_rgba(255,155,210,0.15)]
        "
      >

        <button
          onClick={
            handleFavorite
          }
          className="
          absolute
          top-3
          right-3
          z-20
          w-10
          h-10
          rounded-full
          bg-black/60
          backdrop-blur-md
          border
          border-white/10
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
          hover:border-[#FF9BD2]/50
          "
        >
          <Heart
            size={18}
            className={`transition-all duration-300 ${
              favorite
                ? "fill-[#FF9BD2] text-[#FF9BD2]"
                : "text-white"
            }`}
          />
        </button>

        <div className="overflow-hidden">
          <img
            src={imageUrl}
            alt={movie.title}
            className="
            w-full
            h-[320px]
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
            "
          />
        </div>

        <div className="p-4">

          <h2
            className="
            font-semibold
            text-white
            text-sm
            line-clamp-1
            tracking-tight
            "
          >
            {movie.title}
          </h2>

          <div className="flex items-center justify-between mt-2">

            <p
              className="
              text-zinc-400
              text-xs
              "
            >
              {movie.release_date
                ? movie.release_date.slice(
                    0,
                    4
                  )
                : "Unknown"}
            </p>

            <div
              className="
              px-2
              py-1
              rounded-full
              bg-[#FF9BD2]/10
              border
              border-[#FF9BD2]/20
              text-[#FF9BD2]
              text-[10px]
              font-medium
              "
            >
              Movie
            </div>

          </div>

        </div>

      </div>
    </Link>
  )
}