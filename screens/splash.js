import React,{Component} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export class SplashScreen extends Component{

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('login');
        },2000);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Chat-A-Lot</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})