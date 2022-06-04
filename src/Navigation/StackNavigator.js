import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { View } from "react-native";
import { Root } from "native-base";
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../Screens/Login/LoginScreen';

import { Provider } from 'react-redux'
import store from '../Redux/index'
import HomeScreen from '../Screens/Home/HomeScreen';

const Stack = createStackNavigator();

const App = () =>
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen"  screenOptions={{headerShown: false}}> 
        <Stack.Screen name = "LoginScreen" component = {LoginScreen}/>   
        <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <Provider store={store} style={{ flex : 1 }}>
    <Root>
      <App />
    </Root>
   </Provider>
);