import axios from "axios"

const API_KEY =
  import.meta.env.VITE_TMDB_API_KEY

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
})

export const searchMovies = async (
  query,
  page = 1
) => {
  const response = await tmdbApi.get(
    "/search/movie",
    {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    }
  )

  return response.data
}

export const getTrendingMovies =
  async (page = 1) => {
    const response =
      await tmdbApi.get(
        "/trending/movie/day",
        {
          params: {
            api_key: API_KEY,
            page,
          },
        }
      )

    return response.data
  }

export const getMovieDetail =
  async (id) => {
    const response =
      await tmdbApi.get(`/movie/${id}`, {
        params: {
          api_key: API_KEY,
        },
      })

    return response.data
  }