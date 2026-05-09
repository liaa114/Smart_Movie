import { useQuery } from "@tanstack/react-query"

import {
  getMovieDetail,
} from "../api/tmdb"

export const useMovieDetail = (
  id
) => {
  return useQuery({
    queryKey: [
      "movie-detail",
      id,
    ],
    queryFn: () =>
      getMovieDetail(id),
    enabled: !!id,
  })
}