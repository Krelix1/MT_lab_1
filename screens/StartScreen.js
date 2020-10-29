import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MovieAPI from '../services/movieAPI';

function StartScreen({navigation}) {
  const [movies, setMovies] = useState([]);
  const redirectToMoviePage = () => {
    navigation.navigate('Movie');
  };

  useEffect(() => {
    const getMovies = async () => {
      const res = await MovieAPI.getUpcomingMovies();
      // console.log(res);
      setMovies(res);
    };

    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      {movies.map((movie) => (
        <View>
          <Text>{movie.title}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#ffffff',
    color: '#222222',
    padding: 15,
    borderRadius: 22,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default StartScreen;
