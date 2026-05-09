export default function EmptyState({
  error,
  isLoading,
  movies,
  showFavorites,
  debouncedSearch,
}) {
  return (
    <div className="mt-6">

      {error && (
        <p className="text-sm text-red-400">
          Something went wrong
        </p>
      )}

      {!isLoading &&
        movies.length === 0 &&
        (showFavorites ||
          debouncedSearch.trim() !== "") && (
          <p className="text-sm text-zinc-300">
            {showFavorites
              ? "No favorite movies yet"
              : "Movie not found"}
          </p>
      )}

    </div>
  )
}