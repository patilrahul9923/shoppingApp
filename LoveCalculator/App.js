

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,StatusBar } from 'react-native';
import { Appbar,TextInput,Button } from 'react-native-paper';
import Calculate from './Calculate'
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from './MainScreen';
import SplaceScreen from './Screens/SplaceScreen'




 export default class App extends Component {
   state={
     screen:<SplaceScreen/>
   }

  componentWillMount(){
    setTimeout(
      ()=>{
      this.setState({
       
        screen:<MainScreen/>
      })
    },3000
    );
  }

  render() {
    return (
        <View style={styles.container}> 
          {this.state.screen}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  }
 
});
