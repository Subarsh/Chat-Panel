import {
    createStackNavigator, 
    createAppContainer,
    createSwitchNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import { SplashScreen } from '../screens/splash';
import { LoginScreen } from '../screens/login';
import { SignupScreen } from '../screens/signup';
import { MessageScreen } from '../screens/message';
import { GroupScreen } from '../screens/group';
import { UserMessageScreen } from '../screens/userMessage';

const messagesStackNavigator = createStackNavigator({
    UserMessages : {
        screen: UserMessageScreen
    }
})

const messageStackNavigator = createStackNavigator({
    Message: {
        screen: MessageScreen,
    }
    
},{
    headerMode: null
})

const groupStackNavigator = createStackNavigator({
    Group: {
        screen: GroupScreen,
    }
},{
    headerMode: null
})

const tabNavigator = createBottomTabNavigator({
    message: {
        screen: messageStackNavigator
    },
    group: {
        screen: groupStackNavigator
    }
});

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
    home: tabNavigator,
    message: MessageScreen,
    group: GroupScreen,
    UserMessage: {
        screen: messagesStackNavigator
    }
},{
    initialRouteName: 'loginpage',
    headerMode: 'none'
})

const switchNavigator = createSwitchNavigator({
    splash: SplashScreen,
    login: stackNavigator,
})

export default AppNavigator = createAppContainer(switchNavigator);