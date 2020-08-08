import React from 'react'
import { StyleSheet, View } from 'react-native'
import { globalStyles } from '../styles/global.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card({ children, navigation, type }) {
      
    const checkInHandler = () => {
        if (type=="CheckIn") {
            navigation.navigate("Search")
        } else if (type=="History") {
            navigation.navigate("History")
        } else if (type=="Profile") {
            navigation.navigate("User")
        } else {
            navigation.navigate("About")
        }
    }
    return (
        <TouchableOpacity style={globalStyles.card} onPress={checkInHandler} activeOpacity={1}>
            <View style={styles.cardContent}>
                { children }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContent: {
        marginHorizontal: 18, 
        marginVertical: 10,
    }
})