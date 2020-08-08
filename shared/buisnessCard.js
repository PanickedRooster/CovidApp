import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global.js';

export default function BuisnessCard({children, navigation, item}) {

    const goToBuisness = () => {
        navigation.navigate("Buisness", item)
      }

    return (
        <TouchableOpacity style={styles.card} onPress={goToBuisness} activeOpacity={1}>
            <View style={styles.cardContent}>
                { children }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContent: {
        marginHorizontal: 50, 
        marginVertical: 10,
        alignItems: 'center',
        // alignContent: 'center'
    },
    card: {
        borderRadius: 12, 
        elevation: 2, 
        backgroundColor: '#fcfcfc',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        marginHorizontal: 5, 
        marginVertical: 15,
    },
})