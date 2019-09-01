import { AsyncStorage } from 'react-native';

const userCache = async () => {
    return await AsyncStorage.getItem('user');
}

export default UserCache = userCache;