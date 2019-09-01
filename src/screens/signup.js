import React,{Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, Button, Dimensions, AsyncStorage } from 'react-native';

export class SignupScreen extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            error: ''
        }
        this.register = this.register.bind(this);
    }

    register = () => {
        alert('register');
    }

    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={{width: 250, height: 250}}
                    source={require('../assets/signup.png')} /> 
                <TextInput
                    style={[styles.label, {marginTop: 20}]}
                    placeholder='Name'
                    value={this.state.email}
                    onChangeText = {(text) => this.setState({name: text})} />
                <TextInput 
                    style={styles.label}
                    placeholder='Email Address'
                    onChangeText = {(text) => this.setState({email: text})}
                    />
                <TextInput 
                    style={styles.label}
                    placeholder='Password'
                    onChangeText = {(text) => this.setState({password: text})}
                    />
                <TextInput 
                    style={styles.label}
                    placeholder='Cofirm Password'
                    onChangeText = {(text) => this.setState({password2: text})}
                    />
                <TouchableOpacity 
                    activeOpacity = {0.7}
                    onPress={this.register}>
                        <View style={styles.registerButton}>
                            <Text style={{textAlign: 'center',color: 'white'}}>SIGN UP</Text>
                        </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    activeOpacity = {0.7}
                    onPress={() => this.props.navigation.navigate('loginpage')}>
                        <View style={styles.loginButton}>
                            <Text style={{textAlign: 'center',color: 'white'}}>LOGIN</Text>
                        </View>
                </TouchableOpacity>
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
        margin: 4,
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        paddingLeft: 10,
        fontSize: 20,
        borderRadius: 16,
        width: Dimensions.get('window').width - 50
    },
    loginButton:{
        marginTop: 4,
        backgroundColor: 'gray', 
        width: Dimensions.get('screen').width - 150 , 
        padding: 20, 
        fontSize: 20, 
        borderRadius: 8
    },
    registerButton: {
        marginTop: 20,
        backgroundColor: 'green',
        width: Dimensions.get('screen').width - 150 , 
        padding: 20, 
        fontSize: 20, 
        borderRadius: 8
    }
})