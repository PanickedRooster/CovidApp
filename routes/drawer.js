import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import checkInStack from './checkInStack';
import historyStack from './historyStack';
import aboutStack from './aboutStack';
import profileStack from './profileStack';

const rootDrawerNavigator = createDrawerNavigator({
    CheckIn: {
        screen: checkInStack,
    },
    History: {
        screen: historyStack,
    },
    About: {
        screen: aboutStack,
    },
    Profile: {
        screen: profileStack,
    }
})

export default createAppContainer(rootDrawerNavigator);