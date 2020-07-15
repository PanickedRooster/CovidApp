import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/homeScreen'
import defaultScreen from '../screens/default'

const screens = {
    Homee: {
        screen: Home,
        navigationOptions: {
            title: '',
            headerStyle: {
                backgroundColor: "pink",
                shadowOpacity: 0,
                elevation: 0
            }
        }
    },
    CheckIn: {
        screen: defaultScreen,
        navigationOptions: {
            title: 'GameZone'
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);