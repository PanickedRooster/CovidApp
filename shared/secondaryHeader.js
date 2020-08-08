import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global'

export default function SecondaryHeader({ navigation, name }) {
    
    const back = () => {
        navigation.goBack()
    }
    
    return(
        <View style={styles.header}>
            <Ionicons name='md-arrow-back' size={35} onPress={back} style={styles.icon}/>
            <View>
                <Text style={globalStyles.headerText}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    icon: {
        color: 'white',
        position: 'absolute',
        left: 16
    }
})