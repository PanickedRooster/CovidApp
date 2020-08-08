import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { EvilIcons, MaterialIcons, MaterialCommunityIcons, Feather, AntDesign, FontAwesome} from '@expo/vector-icons';
import Card from '../shared/card.js';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Card navigation={navigation} type={"CheckIn"}>
          <View style={styles.card}>
            <FontAwesome name='check-circle' size={75} color="#ff5f7f"/>
            <Text style={styles.iconText}> Check In</Text>
          </View>
        </Card>
        <Card navigation={navigation} type={"History"}>
          <View style={styles.card}>
            <FontAwesome name='history' size={75} color="#ff5f7f" />
            <Text style={styles.iconText}> History</Text>
          </View>
        </Card>
        <Card navigation={navigation} type={"Profile"}>       
          <View style={styles.card}>
            <MaterialCommunityIcons name='face-profile' size={75} color="#ff5f7f"/>
            <Text style={styles.iconText}>Profile</Text>
          </View>
        </Card>
        <Card navigation={navigation} type={"Contact"}>     
          <View style={styles.card}>  
            <FontAwesome name='address-card' size={75} color="#ff5f7f" />
            <Text style={styles.iconText}>Contact</Text>
          </View>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5e72e4",
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 49,
    color: '#8898aa',
    fontFamily: "Nucleo",
    padding: 10,
  },
});
