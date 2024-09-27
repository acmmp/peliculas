import axios from 'axios';

const API_KEY = '4002cd8cf6451e35623c6ef51367ee74';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovieRecommendations = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`);
  return response.data.results;
};
// Búsqueda de películas
export const searchMovies = async (query, selectedGenre, selectedYear, selectedRating) => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  };

  // Obtener géneros
export const getGenres = async () => {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: { api_key: API_KEY },
    });
    return response.data.genres;
  };
  

  export const advancedSearchMovies = async (query, genre, year, rating) => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        with_genres: genre,
        primary_release_year: year,
        'vote_average.gte': rating,
      },
    });
    return response.data.results;
  };
  