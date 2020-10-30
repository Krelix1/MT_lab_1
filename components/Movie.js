import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

function Movie({movie}) {
  console.log(movie.backdrop_path);
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: movie.backdrop_path}} style={styles.image}>
        <Text style={styles.text}>{movie.title}</Text>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    margin: 5,
    height: 300,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#222222',
  },
});

export default Movie;
