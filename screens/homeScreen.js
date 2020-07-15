import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

export default function Home({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('CheckIn');
    }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to check in" onPress={pressHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
