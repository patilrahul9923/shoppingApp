
import React, {Component} from 'react';
import {Platform, StyleSheet,Button, Text, View} from 'react-native';





export default class Home extends Component{
  render() {
    return (
       <View style={{flex:1, justifyContent:'center',alignItems:'center'}} >
          <Text style={{fontSize:24}}>Home Screen</Text>
          <Button title="Open" onPress={()=>this.props.navigation.toggleDrawer() }/>
      </View> 
    );
  }
}
