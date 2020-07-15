import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import history from '../screens/history'
import Header from '../shared/header'
import React from 'react'

const screens = {
    History: {
        screen: history,
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

const historyStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default historyStack;
