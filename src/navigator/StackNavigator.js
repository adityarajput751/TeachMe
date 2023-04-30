import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash/Splash';
import Landing from '../screens/landing/Landing';
import Login from '../screens/auth/login/Login';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {

  return (
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="Landing" component={Landing}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
  );
};

export default StackNavigator;
