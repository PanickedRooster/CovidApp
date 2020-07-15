import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import profile from '../screens/profile'
import Header from '../shared/header'
import React from 'react'

const screens = {
    Profile: {
        screen: profile,
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

const profileStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default profileStack;

