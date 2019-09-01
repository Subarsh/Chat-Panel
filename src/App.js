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
} from 'react-native';
import AppNavigator from '../src/navigator/appNavigator';

export class App extends Component{

  constructor(props){
    super(props);
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
