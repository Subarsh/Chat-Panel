import React,{Component} from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Dimensions, Image, Text, TextInput } from 'react-native';
import axios from 'axios';
import Url from '../constants/url';
import {MessageLayout} from '../layout/messagelayout';

export class UserMessageScreen extends Component{

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.name,
        headerMode: 'float'
    });

    constructor(props){
        super(props);

        this.state = {
            messages: [],
            message: ''
        }
        let user_id = this.props.navigation.state.params.userId;
        let friend_id = this.props.navigation.state.params.toId;

        setInterval(()=> {
            this.fetchMessages(user_id, friend_id);
        },500);
    }

    fetchMessages = (user_id, friend_id) => {
        let url = Url() + '/conversation/' + user_id + '/' + friend_id;
        axios
            .get(url)
            .then(res => this.setState({ messages: res.data.response }) )
            .catch(err => alert(err));
    }

    componentDidMount(){
        
    }

    sendMessage = (event) => {
        alert('sending message');
        let url = Url() + '/conversation'
        let message = {
            from: this.props.navigation.state.params.userId,
            message: this.state.message,
            to: this.props.navigation.state.params.toId
        }
        axios
            .post(url, message)
            .then(response => {
                this.setState({ message: ''})
            })
            .catch(err => alert(err));
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.messageContainer}>
                    <FlatList
                        data = {this.state.messages}
                        renderItem = {(message) => <MessageLayout
                                                         data={message} 
                                                         userId={this.props.navigation.state.params.userId}/>}
                        />
                </View>
                <View style={styles.messageSendContainer}>
                    <TextInput 
                        style = {styles.messagePanel}
                        placeholder = 'Type any messages'
                        value={this.state.message}
                        onChangeText = {(text) => this.setState({message: text})}/>
                    <TouchableOpacity 
                        style={styles.sendButton}
                        activeOpacity = {0.7}
                        onPress = {() => this.sendMessage()}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Send</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    messagePanel:{
        flex: 3,
        borderColor: 'black',
    },
    messageContainer: {
        flex: 5,
        alignSelf: 'flex-start',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-100,
        borderWidth: 1
    },
    messageSendContainer: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        width: Dimensions.get('window').width,
        borderColor: 'black',
    },
    sendButton: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'blue',
        justifyContent: 'center'
    }
})