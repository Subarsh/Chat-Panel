import {
    createStackNavigator, 
    createAppContainer,
    createSwitchNavigator} from 'react-navigation';
import { SplashScreen } from '../screens/splash';
import { LoginScreen } from '../screens/login';
import { ChatScreen } from '../screens/chat';

const switchNavigator = createSwitchNavigator({
    splash: SplashScreen,
    login: LoginScreen,
    home: stackNavigator
})

const stackNavigator = createStackNavigator({
    chat: ChatScreen
})

export default AppNavigator = createAppContainer(switchNavigator);