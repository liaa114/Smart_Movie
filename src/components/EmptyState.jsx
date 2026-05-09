import { useEffect } from "react"
import Swal from "sweetalert2"

export default function EmptyState({
  error,
  isLoading,
  movies,
  showFavorites,
  debouncedSearch,
}) {

  useEffect(() => {

    if (error) {

      let title = "Something went wrong"
      let text =
        "Failed to fetch movie data"

      if (
        error?.response?.status === 429
      ) {
        title = "API Limit Reached"

        text =
          "Too many requests. Please wait a moment and try again."
      }

      else if (
        error?.message?.includes(
          "Network"
        )
      ) {
        title = "Connection Error"

        text =
          "Please check your internet connection."
      }

      Swal.fire({
        icon: "error",
        title,
        text,
        background: "#18181b",
        color: "#fff",
        confirmButtonColor:
          "#ec4899",
        backdrop: `
          rgba(0,0,0,0.8)
        `,
        customClass: {
          popup:
            "rounded-3xl border border-white/10",
        },
      })
    }

  }, [error])

  useEffect(() => {

    if (
      !isLoading &&
      movies.length === 0 &&
      (showFavorites ||
        debouncedSearch.trim() !== "")
    ) {

      Swal.fire({
        icon: "info",
        title: showFavorites
          ? "No Favorites Yet"
          : "Movie Not Found",
        text: showFavorites
          ? "You haven't added favorite movies yet."
          : "Try searching with another keyword.",
        background: "#18181b",
        color: "#fff",
        confirmButtonColor:
          "#ec4899",
        backdrop: `
          rgba(0,0,0,0.8)
        `,
        customClass: {
          popup:
            "rounded-3xl border border-white/10",
        },
      })
    }

  }, [
    isLoading,
    movies,
    showFavorites,
    debouncedSearch,
  ])

  return null
}