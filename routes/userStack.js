import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import history from '../screens/history'
import Header from '../shared/header'
import React from 'react'
import user from '../screens/user'
import globalStyles from '../'

const screens = {
    User: {
        screen: user,
        navigationOptions: ({ navigation }) => {
            return { 
                headerTitle: () => <Header navigation={navigation} name={"Profile Info"}/>,
                headerStyle: { 
                    backgroundColor: "#5e72e4",
                    shadowOpacity: 0,
                    elevation: 0,
                }
            }
        },
    }
}

const userStack = createStackNavigator(screens, {
});

export default userStack;
