import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import checkIn from '../screens/checkIn'
import Header from '../shared/header'
import React from 'react'

const screens = {
    CheckIn: {
        screen: checkIn,
        navigationOptions: {
            headerTitle: () => <Header />,
            headerStyle: {
                backgroundColor: "pink",
                shadowOpacity: 0,
                elevation: 0
            }
        }
    }
}

const checkInStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default checkInStack;
