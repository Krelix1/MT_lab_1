import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Movie({}) {
  return (
    <View style={styles.container}>
      <View style={styles.playingBoard}>
        {cardsArray.map((card, index) => (
          <TouchableOpacity
            style={[styles.card, card.isHidden && {backgroundColor: 'gray'}]}
            onPress={() => showCardValue(index)}
            key={card.id}>
            <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
              {card.isVisible ? card.value : '?'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  containerWin: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 25,
  },
  playingBoard: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  restartButton: {
    width: 200,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 22,
  },
  restartButtonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 18,
  },
  card: {
    width: 80,
    height: 80,
    backgroundColor: '#4e395a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default Movie;
