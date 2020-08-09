import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global'
import { LinearGradient } from 'expo-linear-gradient';

export default function Header({ navigation, name }) {
    
    const openMenu = () => {
        navigation.openDrawer()
    }
    
    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={35} onPress={openMenu} style={styles.icon}/>
            <Text style={globalStyles.headerText}>{name}</Text>
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
        left: '0%'
    }
})