import React, {useState} from 'react';
import {
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Movie({movie}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (!isModalOpen) {
            setIsModalOpen(true);
          }
        }}
        style={{flex: 1}}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/original' + movie.backdrop_path,
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{movie.title}</Text>
        </View>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}>
        <View style={styles.modal}>
          <Pressable
            style={styles.closeButton}
            onPress={() => {
              setIsModalOpen(false);
            }}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>

          <Image
            style={styles.modalImage}
            source={{
              uri: 'https://image.tmdb.org/t/p/original' + movie.backdrop_path,
            }}
          />

          <Text style={styles.modalMovieTitle}>{movie.title}</Text>

          <Text style={styles.modalMovieDescription}>{movie.overview}</Text>

          <Text style={styles.releaseDate}>
            Release date: <Text style={styles.light}>{movie.release_date}</Text>
          </Text>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: 300,
    borderRadius: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textContainer: {
    flex: 0.3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4e395a',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    flex: 1,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
  },
  modal: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#ffe8e8',
  },
  closeButton: {
    zIndex: 10,
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#4e395a',
    borderRadius: 100,
  },
  closeButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  modalImage: {
    height: '30%',
    width: '100%',
  },
  modalMovieTitle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
  },
  modalMovieDescription: {
    width: '100%',
    height: 'auto',
    marginBottom: 20,
    color: 'black',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  releaseDate: {
    color: 'black',
    fontSize: 16,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'normal',
  },
});

export default Movie;
