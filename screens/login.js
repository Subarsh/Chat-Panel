import React,{Component} from 'react';
import { View, StyleSheet, Image, Text, TextInput, Button, Dimensions, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Firebase } from 'firebase';
import User from '../domain/User';

export class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            phoneNumber: Number,
            password: String
        }
    }

    handleLogin = async () => {
        let phonenumber = await AsyncStorage.getItem('phoneNumber');
        console.log("phone number" + phonenumber);
        console.log("in cache" + !phonenumber);
        if(!phonenumber){
            await AsyncStorage.setItem('phoneNumber',this.state.phoneNumber);
            this.props.navigation.navigate('chat');
        }
        alert(this.state.phoneNumber + " " + this.state.password);
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.label}
                    placeholder='Phone Number'
                    onChangeText = {(text) => this.setState({phoneNumber: text})} />
                <TextInput 
                    style={styles.label}
                    placeholder='Password'
                    onChangeText = {(text) => this.setState({password: text})}
                    />
                <Text style={{textAlign: 'center', fontSize: 20}} onPress={this.handleLogin}>Login</Text>
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