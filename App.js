import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import Landing from './src/screens/landing/Landing';
import Splash from './src/screens/splash/Splash';

const App = () => {
  return (
    // <View style={{flex: 1}}>
      <SafeAreaView >
        {/* <NavigationContainer>
          <StackNavigator />
        </NavigationContainer> */}
        <Landing />
      </SafeAreaView>
      
    // </View>
  );
};

export default App;
