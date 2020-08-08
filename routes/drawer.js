import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, ScrollView, SafeAreaView, Text, Dimensions, Image, View} from 'react-native'
import userStack from './userStack'
import historyStack from './historyStack';
import aboutStack from './aboutStack';
import homeStack from './homeStack';

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1, marginTop: 50}}>
        <View style={{height: 150, alignItems: 'center',}}>
            <Image source={require('../assets/Rooster.jpg')} style={{height: 100, width: 100, borderRadius: 100/2}}/>
            <Text style={styles.userName}>PanickedRooster</Text>
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)

const rootDrawerNavigator = createDrawerNavigator({
    HOME: {
        screen: homeStack,
    },
    ABOUT: {
        screen: historyStack,
    },
    SUPPORT: {
        screen: aboutStack,
    },
    LOGOUT: {
        screen: userStack,
    }
}, {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: '#ff5f7f',
        inactiveTintColor:'#5e72e4',
    }
})

const styles = StyleSheet.create({
    userName: {
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default createAppContainer(rootDrawerNavigator);