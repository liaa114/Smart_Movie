import { useQuery } from "@tanstack/react-query"

import {
  getMovieCredits,
} from "../api/tmdb"

export const useMovieCredits = (
  id
) => {
  return useQuery({
    queryKey: [
      "movie-credits",
      id,
    ],
    queryFn: () =>
      getMovieCredits(id),
    enabled: !!id,
  })
}