import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from './screens/StartScreen.js';

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
        }}>
        <Stack.Screen
          name="Home"
          component={StartScreen}
          options={{
            title: 'Agaev Daniil Lab 2',
            cardStyle: {
              backgroundColor: '#ffe8e8',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
