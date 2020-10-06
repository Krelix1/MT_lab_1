import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from './screens/StartScreen.js';
import Game from './screens/Game';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4e395a',
            borderBottomEndRadius: 20,
            borderBottomLeftRadius: 20,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={StartScreen}
          options={{
            title: 'Hello',
            cardStyle: {
              backgroundColor: '#222222',
            },
          }}
        />

        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            title: 'Hello',
            cardStyle: {
              backgroundColor: '#222222',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
