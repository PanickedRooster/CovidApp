import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import about from '../screens/about'
import Header from '../shared/header'
import React from 'react'
import globalStyles from '../styles/global'

const screens = {
    About: {
        screen: about,
        navigationOptions: ({ navigation }) => {
            return { 
                headerTitle: () => <Header navigation={navigation} name={"About"}/>,
                headerStyle: {
                    backgroundColor: "#5e72e4",
                    shadowOpacity: 0,
                    elevation: 0
                }
            }
        },
    }
}

const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default aboutStack;

