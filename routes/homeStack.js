import { createStackNavigator } from 'react-navigation-stack'
import { AntDesign } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation'
import home from '../screens/home'
import buisness from '../screens/buisness'
import history from '../screens/history'
import user from '../screens/user'
import Header from '../shared/header'
import SecondaryHeader from '../shared/secondaryHeader'
import React from 'react'
import search from '../screens/search'
import { Image } from 'react-native';

const screens = {
    Profile: {
        screen: home,
        navigationOptions: ({ navigation }) => {
            return {  
                headerTitle: () => <Header navigation={navigation} name={"Home Page"}/>,
                headerStyle: {
                    backgroundColor: "#5e72e4",
                    shadowOpacity: 0,
                    elevation: 0
                },
                drawerIcon: ({tintColor}) => (
                    <Image soruce={require("../assets/favicon.png")} style={{height: 12, width: 21}}/>
                ),
            } 
        },
    },
    Search: {
        screen: search,
        navigationOptions: ({ navigation }) => {
            return { 
                headerTitle:  () => <SecondaryHeader navigation={navigation} name={"Check In"}/>,
                headerLeft: () => {},
                headerStyle: {
                    backgroundColor: "#5e72e4",
                    shadowOpacity: 0,
                    elevation: 0
                }
            } 
        },
    },
    Buisness: {
        screen: buisness,
        navigationOptions: ({ navigation }) => {
            return { 
                headerTitle:  () => <SecondaryHeader navigation={navigation} name={"Check In"}/>,
                headerLeft: () => {},
                headerStyle: {
                    backgroundColor: "#5e72e4",
                    shadowOpacity: 0,
                    elevation: 0
                }
            } 
        },

    },
    History: {
        screen: history,
        navigationOptions: ({ navigation }) => {
            return { 
                headerTitle: () => <SecondaryHeader navigation={navigation} name={"Your History"}/>,
                headerLeft: () => {},
                headerStyle: { 
                    backgroundColor: "#5e72e4",
                    shadowOpacity: 0,
                    elevation: 0,
                }
            }
        },
    },
    User: {
        screen: user,
        navigationOptions: ({ navigation }) => {
            return { 
                headerTitle: () => <SecondaryHeader navigation={navigation} name={"Your Profile"}/>,
                headerLeft: () => {},
                headerStyle: { 
                    backgroundColor: "#5e72e4",
                    shadowOpacity: 0,
                    elevation: 0
                }
            }
        },
    }
}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default homeStack;

