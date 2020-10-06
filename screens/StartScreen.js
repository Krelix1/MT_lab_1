import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function StartScreen({navigation}) {
  const redirectToGamePage = () => {
    navigation.navigate('Game');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agaev Daniil</Text>

      <Text style={styles.subTitle}>Lab 1</Text>

      <TouchableOpacity style={styles.button} onPress={redirectToGamePage}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
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
