import { AsyncStorage } from 'react-native';

const token = async () => {
    return await AsyncStorage.getItem('token');
}

export default Token = token;