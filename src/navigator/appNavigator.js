import {
    createStackNavigator, 
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import { SplashScreen } from '../screens/splash';
import { LoginScreen } from '../screens/login';
import { ChatScreen } from '../screens/chat';
import { SignupScreen } from '../screens/signup';
import { HomeScreen } from '../screens/home';

const stackNavigator = createStackNavigator({
    loginpage: {
        screen: LoginScreen,
        navigationOptions : {
            header: null
        }
    },
    signup: {
        screen: SignupScreen,
        navigationOptions: {
            header: null
        }
    },
    HomeScreen: HomeScreen,
    ChatScreen: ChatScreen
},{
    initialRouteName: 'loginpage'
})

const switchNavigator = createSwitchNavigator({
    splash: SplashScreen,
    login: stackNavigator,
})

export default AppNavigator = createAppContainer(switchNavigator);