import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Categories from './src/Screens/Categories';
import Header from './src/Components/Header';
import BottomBar from './src/Components/BottomBar';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar backgroundColor="#010d21" barStyle="light-content" />
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{headerShown: false}}
          />
        </Stack.Navigator> 
        <BottomBar />
      </NavigationContainer>
      
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
