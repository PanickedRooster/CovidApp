import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, Dimensions } from 'react-native';
import Drawer from './routes/drawer';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import { FlatList } from 'react-native-gesture-handler';
import SplashScreen from './screens/splashScreen';


const getFonts = () =>  Font.loadAsync({
    'Nucleo': require('./assets/fonts/nucleo-icons.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if(fontsLoaded) {
    return (
      <SplashScreen/>
      // <Drawer />
    ) 
  } else {
    return(
    <AppLoading 
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
