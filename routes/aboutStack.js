import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import about from '../screens/about'
import Header from '../shared/header'
import React from 'react'

const screens = {
    About: {
        screen: about,
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

const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default aboutStack;

