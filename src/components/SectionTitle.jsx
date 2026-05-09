export default function SectionTitle({
  isLoading,
  movies,
  showFavorites,
}) {
  if (
    isLoading ||
    movies.length === 0
  ) {
    return null
  }

  return (
    <div
      className="
      flex
      items-center
      gap-3
      mt-10
      text-sm
      text-zinc-400
      "
    >
      <div className="w-10 h-[1px] bg-zinc-700"></div>

      <span>
        {showFavorites
          ? "My Favorites"
          : "Popular Results"}
      </span>

    </div>
  )
}