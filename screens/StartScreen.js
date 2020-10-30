import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MovieAPI from '../services/movieAPI';
import Movie from '../components/Movie';

function StartScreen({navigation}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await MovieAPI.getUpcomingMovies();
      setMovies(res);
    };

    getMovies();
  }, []);

  return (
    <FlatList
      numColumns={'2'}
      data={movies}
      renderItem={({item}) => <Movie movie={item} />}
      keyExtractor={(movie) => movie.title}
    />
  );
}

export default StartScreen;
