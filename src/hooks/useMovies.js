import { useQuery } from "@tanstack/react-query"
import { searchMovies } from "../api/omdb"

export const useMovies = (query, page) => {
  return useQuery({
    queryKey: ["movies", query, page],
    queryFn: () => searchMovies(query, page),
    enabled: !!query,
  })
}