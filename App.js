import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen.js';
import DetailScreen from './src/screens/DetailScreen.js';
import OtherScreen from './src/screens/OtherScreen.js';

// Configuración del navegador
const Stack = createNativeStackNavigator();


//llamada de screens
function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} />

      <Stack.Screen 
          name="Details" 
          component={DetailScreen}
          initialParams={{ screenText: 'Details Screen', buttonText: 'Go to Another Screen' }} 
        />
        
        <Stack.Screen 
        name="Other" 
        component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;