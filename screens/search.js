import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import Card from '../shared/buisnessCard';


export default function Search({ navigation }) {

  const [buisness, setBuisnessName] = useState([
    {name: "Birdes", id: '1'},
    {name: "Prohibition", id: '2'},
    {name: "Retros", id: '3'},
    {name: "Ringos", id: '4'},
    {name: "Mr.Brightside", id: '5'},
  ])

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput style={styles.search} placeholder="Search For Buisness"/>
        <TouchableOpacity style={styles.qrCode} activeOpacity={1}>
            <View style={styles.cardContent}>
                <Text style={{color: '#8898aa', fontSize: 25, textAlign: 'center'}}>QR</Text>
            </View>
        </TouchableOpacity>
      </View>
      <Entypo name='dots-three-horizontal' size={40} color='white'/>
      <View style={styles.list}>
        <FlatList 
          data={buisness}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card navigation={navigation} item={item}>
              <Text style={styles.itemText}>{item.name}</Text>
            </Card>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e72e4',
    padding: 6,
    alignItems: 'center',
  },
  search: {
    textAlign: 'center',
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 25,
    borderWidth: 1,
    padding: 10,
    width: 295,
  },
  searchBar: {
    alignSelf: 'stretch',
    paddingLeft: 20,
    flexDirection: 'row'
  },
  qrCode: {
    padding: 15,
    borderRadius: 12, 
    elevation: 2, 
    shadowOffset: { width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    paddingVertical: 15,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  itemText: {
    color: '#8898aa',
    fontSize: 50,
    padding: 10,
    fontFamily: 'Nucleo'
  },
  list: {
    flex: 1,
  }
});
