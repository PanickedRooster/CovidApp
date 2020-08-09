import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/bownsa-w.png')} style={{height: 50, width: 200}}/>
        </View>
        <View style={styles.footer}>
            <View style={styles.headerOfFooter}>
                <Text style={styles.title}>Social Distance The Fast Way!</Text>
                <Text style={styles.smallText}>Sign in with account</Text> 
            </View>
            <View>
                <TouchableOpacity style={styles.logIn} activeOpacity={0.8}>
                    <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>Log In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signLogButtons}>
                <TouchableOpacity style={styles.signUp} activeOpacity={0.8}>
                    <Text style={{color: '#5e72e4', fontSize: 25, textAlign: 'center'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e72e4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signLogButtons: {
      paddingVertical: "3%",
  },
  logIn: {
    borderRadius: 12, 
    paddingVertical: "1%",
    paddingHorizontal: "40%",
    borderRadius: 10,
    backgroundColor: '#5e72e4',
  },
  signUp: {
    borderRadius: 12, 
    borderColor: '#5e72e4',
    borderWidth: 2,
    paddingVertical: "1%",
    paddingHorizontal: "38%",
    borderRadius: 10,
    backgroundColor: 'white',
  },
  smallText: {
      paddingBottom: "4%",
      paddingLeft: "4%",
      color: "grey"
  },
  title: {
      fontFamily: 'Nucleo',
      color: '#8898aa',
      fontSize: 40,
      padding: '4%',
  },
  footer: {
      flex: 1,
      backgroundColor: "white",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      width: '100%', 
      alignContent: 'center',
      alignItems: 'center'
  },
  header: {
      flex: 2,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: "center",
  }
});
