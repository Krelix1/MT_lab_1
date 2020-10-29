import * as axios from 'axios';

const key = 'f224e438cdaf4f8191268f9bbb283405';

const instance = axios.create({
  baseUrl: 'https://api.themoviedb.org/3/',
});

const MovieAPI = {
  getUpcomingMovies: async () => {
    console.log(axios);
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=f224e438cdaf4f8191268f9bbb283405&language=ru-Ru&page=1`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    return res.json().then((res) => res.results);
  },
};

export default MovieAPI;
