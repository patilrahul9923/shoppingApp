import React, { Component } from 'react'
import {
  View,Style,Text,TouchableOpacity
} from 'react-native'
import {AccessToken,LoginManager} from 'react-native-fbsdk';

login=()=>
{
  LoginManager.logInWithReadPermissions(['public_profile']).then(
    function(result) {
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        console.warn(
          'Login success with permissions: ' +
            result.grantedPermissions.toString()
        );
      }
    },
    function(error) {
      console.log('Login fail with error: ' + error);
    }
  );
}

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={this.login}>
      <Text style={{fontSize:25}}>Login Fb</Text>
      </TouchableOpacity>
       
      </View>
    )
  }
}