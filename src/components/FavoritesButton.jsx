export default function FavoritesButton({
  showFavorites,
  setShowFavorites,
  favorites,
  setFavorites,
  getFavorites,
}) {
  return (
    <button
      onClick={() => {
        setFavorites(getFavorites())

        setShowFavorites(!showFavorites)
      }}
      className={`
      h-14
      px-5
      rounded-2xl
      border
      backdrop-blur-xl
      text-white
      transition-all
      duration-300
      flex
      items-center
      justify-center
      gap-2
      shrink-0

      ${
        showFavorites
          ? "bg-[#FF9BD2] border-[#FF9BD2]"
          : `
            border-white/10
            bg-white/5
            hover:border-[#FF9BD2]/40
            hover:bg-[#FF9BD2]/10
          `
      }
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>

      <span
        className="
        hidden
        sm:block
        text-sm
        font-medium
        "
      >
        {showFavorites
          ? "All Movies"
          : `Favorites (${favorites.length})`}
      </span>
    </button>
  )
}