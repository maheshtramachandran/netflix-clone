import apiKey from "./api.config";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genre=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genre=35`,
  fetchHorrorMovies: `/trending/all/day?api_key=${apiKey}`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genre=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genre=99`,
};

export default requests;
