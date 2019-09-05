import React,{Component} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, Button, Dimensions, AsyncStorage } from 'react-native';
import axios from 'axios';
import Url from '../constants/url';

export class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = () => {
        // let url = Url() + '/user/login';
        // let user = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        // axios
        //     .post(url,user)
        //     .then(res => {
        //         if(res.status === 200){
        //             let token = res.data.token;
        //             if(token){
        //                 this.storeCredentials(token,res.data.user);
        //                 setTimeout(() => {
        //                     this.props.navigation.navigate('home');
        //                 },1000);
        //             }else{
        //                 alert('Auth Failed');
        //             }
        //         }else if(res.status === 404){
        //             this.setState({error : res.data.message});
        //             alert('Auth Failed');
        //         }
        //     })
        //     .catch(err => {
        //         alert("error: " + err);
        //     });
        this.props.navigation.navigate('home');
    }

    storeCredentials = async (token,user) => {
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('user', JSON.stringify(user));
    }

    register = async () =>{
        let token = await AsyncStorage.getItem('token');
        let email = await AsyncStorage.getItem('user');
        alert(email);

        // alert('press signup')
    }

    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={{width: 200, height: 190}}
                    source={require('../assets/messenger.png')} /> 
                
                { this.state.error ?
                    <Text style={{color: 'red',fontSize: 20}}>{this.state.error}</Text>: null }
                <TextInput
                    style={styles.label}
                    onChangeText= {(text) => this.setState({email: text})}
                    placeholder='Email Address'
                    value = {this.state.email} />
                <TextInput 
                    style={styles.label}
                    placeholder='Password'
                    onChangeText= {(text) => this.setState({password: text})}
                    value = {this.state.password}
                    />
                <TouchableOpacity 
                    activeOpacity = {0.7}
                    onPress={this.handleLogin}>
                        <View style={styles.loginButton}>
                            <Text style={{textAlign: 'center',color: 'white'}}>LOGIN</Text>
                        </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    activeOpacity = {0.7}
                    onPress = {this.register}>
                    {/* // onPress={() => this.props.navigation.navigate('signup')}> */}
                        <View style={styles.registerButton}>
                            <Text style={{color: 'white', textAlign: 'center'}}>SIGN UP</Text>
                        </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label:{
        margin: 8,
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        paddingLeft: 10,
        fontSize: 20,
        borderRadius: 16,
        width: Dimensions.get('window').width - 50
    },
    loginButton:{
        marginTop: 20,
        backgroundColor: 'gray', 
        width: Dimensions.get('screen').width - 150 , 
        padding: 20, 
        fontSize: 20, 
        borderRadius: 8
    },
    registerButton: {
        marginTop: 5,
        backgroundColor: 'green',
        width: Dimensions.get('screen').width - 150 , 
        padding: 20, 
        fontSize: 20, 
        borderRadius: 8
    }
})