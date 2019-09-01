import React,{Component} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export class ChatScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
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