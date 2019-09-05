import React,{Component} from 'react';
import { View, StyleSheet, Image, Text, TextInput, Button, Dimensions, AsyncStorage } from 'react-native';
import Token from '../storage/token';
import Email from '../storage/email';

export class HomeScreen extends Component{
    
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
    }

    checkToken = () =>{
        let email = Email();
        alert(JSON.stringify(email));
    }

    render(){
        return(
            <View style={styles.container}>
                <Text onPress={()=> this.checkToken()}>CLick me</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label:{
        borderWidth: 1,
        height: 50,
        width: Dimensions.get('window').width - 150
    },
    button: {
        width: 200, 
        height: 40, 
        marginTop: 20, 
        backgroundColor: 'green',
    }
})