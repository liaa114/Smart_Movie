const FAVORITES_KEY =
  "favorite_movies"

export function getFavorites() {
  return JSON.parse(
    localStorage.getItem(
      FAVORITES_KEY
    ) || "[]"
  )
}

export function isFavorite(id) {
  const favorites =
    getFavorites()

  return favorites.some(
    (movie) => movie.id === id
  )
}

export function toggleFavorite(
  movie
) {
  const favorites =
    getFavorites()

  const exists =
    favorites.find(
      (item) =>
        item.id === movie.id
    )

  let updatedFavorites = []

  if (exists) {
    updatedFavorites =
      favorites.filter(
        (item) =>
          item.id !== movie.id
      )
  } else {
    updatedFavorites = [
      ...favorites,
      movie,
    ]
  }

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(
      updatedFavorites
    )
  )

  window.dispatchEvent(
    new Event(
      "favoritesUpdated"
    )
  )

  return updatedFavorites
}