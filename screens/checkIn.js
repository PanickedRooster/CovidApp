import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CheckIn() {
  return (
    <View style={styles.container}>
      <Text>Check In Screen</Text>
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
