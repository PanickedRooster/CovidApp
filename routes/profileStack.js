import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header';
import React from 'react';
import globalStyles from '../';
import ProfileCt from '../screens/profileCt';


const screens = {
    Profile: {
        screen: ProfileCt,
        navigationOptions: ({ navigation }) => {
            return { 
                headerTitle: () => <Header navigation={navigation} name={"Your Profile"}/>,
                headerStyle: { 
                    backgroundColor: "#5e72e4",
                    shadowOpacity: 0,
                    elevation: 0
                }
            }
        },
    }
}

const profileStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default profileStack;
