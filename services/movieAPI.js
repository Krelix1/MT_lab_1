import axios from 'axios';

const key = 'f224e438cdaf4f8191268f9bbb283405';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const MovieAPI = {
  getUpcomingMovies: async () => {
    const res = await instance.get(
      `movie/upcoming?api_key=${key}&language=ru-Ru&page=1`,
    );
    return res.data.results;
  },
};

export default MovieAPI;
