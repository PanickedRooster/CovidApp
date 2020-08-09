import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import support from '../screens/support'
import Header from '../shared/header'
import React from 'react'

const screens = {
    Support: {
        screen: support,
        navigationOptions: ({ navigation }) => {
            return { 
                headerTitle: () => <Header navigation={navigation} name={"Support"}/>,
                headerStyle: { 
                    backgroundColor: "#5e72e4",
                    shadowOpacity: 0,
                    elevation: 0,
                }
            }
        },
    }
}

const historyStack = createStackNavigator(screens, {
});

export default historyStack;
