import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const cards = [
  {
    id: 1,
    value: 1,
    isVisible: false,
    isHidden: false,
  },
  {
    id: 2,
    value: 1,
    isVisible: false,
    isHidden: false,
  },
  {
    id: 3,
    value: 2,
    isVisible: false,
    isHidden: false,
  },
  {
    id: 4,
    value: 2,
    isVisible: false,
    isHidden: false,
  },
  {
    id: 5,
    value: 3,
    isVisible: false,
    isHidden: false,
  },
  {
    id: 6,
    value: 3,
    isVisible: false,
    isHidden: false,
  },
  {
    id: 7,
    value: 4,
    isVisible: false,
    isHidden: false,
  },
  {
    id: 8,
    value: 4,
    isVisible: false,
    isHidden: false,
  },
  {id: 9, value: 5, isVisible: false, isHidden: false},
  {id: 10, value: 5, isVisible: false, isHidden: false},
  {id: 11, value: 6, isVisible: false, isHidden: false},
  {
    id: 12,
    value: 6,
    isVisible: false,
    isHidden: false,
  },
  {id: 14, value: 7, isVisible: false, isHidden: false},
  {
    id: 15,
    value: 7,
    isVisible: false,
    isHidden: false,
  },
  {
    value: 8,
    id: 16,
    isVisible: false,
    isHidden: false,
  },
  {id: 17, value: 8, isVisible: false, isHidden: false},
];
const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.1);
};

function Game({}) {
  const [cardsArray, setCardsArray] = useState([]);
  const [activeCard, setActiveCard] = useState({});
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [isWin, setIsWin] = useState(false);

  const restart = () => {
    const shuffledCards = shuffle(cards);
    shuffledCards.forEach((card) => {
      card.isVisible = false;
      card.isHidden = false;
    });
    setCardsArray(shuffledCards);
    setScore(0);
    setAttempt(0);
  };

  const showCardValue = async (i) => {
    const cards = [...cardsArray];

    if (cards[i].isHidden || cards[i].id === activeCard.id) {
      return;
    }

    if (activeCard.value) {
      if (activeCard.value === cards[i].value) {
        cards[i].isVisible = true;
        cards[i].isHidden = true;

        cards.forEach((card) => {
          if (card.id === activeCard.id) {
            card.isHidden = true;
          }
        });

        setActiveCard({});
        setScore((prevState) => prevState + 1);
        setAttempt((prevState) => prevState + 1);
      } else {
        cards[i].isVisible = true;
        const activeCardId = activeCard.id;
        setActiveCard({});
        setAttempt((prevState) => prevState + 1);

        await setTimeout(() => {
          cards[i].isVisible = false;

          cards.forEach((card) => {
            if (card.id === activeCardId) {
              card.isVisible = false;
            }
          });

          setActiveCard({});
          setCardsArray(cards);
        }, 500);
      }
    } else {
      cards[i].isVisible = true;
      setActiveCard(cards[i]);
    }

    setCardsArray(cards);
    if (cardsArray.every((card) => card.isHidden)) {
      setIsWin(true);
    }
  };

  useEffect(() => {
    const shuffledCards = shuffle(cards);
    setCardsArray(shuffledCards);
  }, []);

  return isWin ? (
    <View style={styles.containerWin}>
      <Text style={styles.title}>You Win!!!</Text>
      <Text style={styles.title}>Score: {score}</Text>
      <Text style={styles.title}>Number of attempts: {attempt}</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Score {score}</Text>

        <TouchableOpacity style={styles.restartButton} onPress={restart}>
          <Text style={styles.restartButtonText}>Restart</Text>
        </TouchableOpacity>
      </View>

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

export default Game;
