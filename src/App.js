/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';
import AppNavigator from '../navigator/appNavigator';

export class App extends Component{

  constructor(props){
    super(props);
    // this.fetchNumber = this.fetchNumber.bind(this);
  }


  componentDidMount(){
    Firebase.initializeApp(firebaseConfig);
    this.fetchNumber();

    console.log("firebase initialising");
  }

  fetchNumber = async () => {
    let phoneNumber = await AsyncStorage.getItem('phoneNumber');
    console.log(phoneNumber);
    if(phoneNumber){
      this.props.navigation.navigate('chat');
    }
  }
  

  render(){
    return(
      <AppNavigator/>
    )
  }
}

const styles = StyleSheet.create({
 
});

export default App;
