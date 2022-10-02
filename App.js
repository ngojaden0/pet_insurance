import React from 'react';

import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './components/Main'

const Stack = createStackNavigator()
export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Main">
        <Stack.Screen name = "Main" component = { MainScreen } options = {{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
