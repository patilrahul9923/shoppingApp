import React, { Component } from 'react';
import { Platform, StyleSheet, Text,Image,View,Alert,
TouchableOpacity,ToastAndroid,
TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Dashboard from './Dashboard'
import {LoginManager} from 'react-native-fbsdk';

var c=0;
class App extends Component {
 constructor(){
   super()
   this.state={
     email:'',
     pass:'',
     username:''
   }
 }

//  initUser(token) {
  
// }

 login=()=>{ 
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailPattern.test(this.state.email) && this.state.pass!='')
  {
    this.props.navigation.navigate('Dashboard')
    ToastAndroid.show('Login successfull',ToastAndroid.SHORT)

    AccessToken.getCurrentAccessToken().then((data) => {
      const { accessToken } = data
      
      fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + accessToken)
      .then((response) => response.json())
      .then((json) => {
        // Some user object has been set up somewhere, build that user here
      this.state.email = json.email
      this.state.username = json.name
    
         console.warn(this.state.email,this.state.username);
           
      })
      .catch(() => {
        reject('ERROR GETTING DATA FROM FACEBOOK')
      })


    })
  }
  else 
    alert('please enter the mail and password')
 }

 oksss(){
      console.warn("ok")
 }

  fbLogin()
  {
    LoginManager.logInWithPermissions(['email']).then(
    function(result) {
      if (result.isCancelled) {
        alert('Login was cancelled');
      } else {
           alert('login successfull')
      }
    },
    function(error) {
      alert('Login failed with error: ' + error);
    }
    
  );


    
  
 }
    
 

  render() {
    return (
      <View style={styles.container}>
       <View style={{alignItems:'center',margin:40,marginTop:-30}}>
       <Image source={require('./asset/pro.png')}
            style={{height:100,width:100,borderRadius:50,borderColor:'white',
            borderWidth:2,
            
            backgroundColor:'white'
           
           }}/>
       </View>

      <View style={{justifyContent:'center'}}>
       
      <TextInput  style={styles.InputText} 
         placeholder='User Name' 
         autoCapitalize="none"

         onChangeText={text=>this.setState({email:text})}
         value={this.state.email}
         />
         <TextInput  style={styles.InputText} 
         placeholder='Password' 
         autoCapitalize="none"
         onChangeText={text=>this.setState({pass:text})}
         value={this.state.pass}
         />
         
          <TouchableOpacity 
          onPress={this.login}

          style={{margin:15}}>
            <Text style={styles.txtLogin}>Login</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center',
          fontSize:16,color:'white', marginTop:20
          }}>Login via Social</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
         <TouchableOpacity onPress={this.fbLogin}
              
          style={{backgroundColor:'white',padding:10,margin:30}}>
         <Image source={require('./asset/fb.png')} style={{height:30,width:30}}/>
         </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:'white',padding:10,margin:30}}>
         <Image source={require('./asset/gplus.png')} style={{height:30,width:30}}/>
         </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent:'center',
   backgroundColor:'#bcbcbc',
   
 
   
  },
  InputText:{
    fontSize:16,
    
    marginLeft:15,
    marginRight:15, 
    marginBottom:10,
    borderWidth:1,
     borderColor:'white',
    borderRadius:7,
    backgroundColor:'white',
    height:55

  },
  txtLogin:{
    backgroundColor:'red',
    color:'white',
    fontSize:24,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:7,
    marginTop:10,
    borderRadius:8,
    textAlign:'center'
  }

});

const navigation=createStackNavigator({
  App:{
    screen:App,
    navigationOptions: () => ({
      header:null,
   })
  },
  Dashboard:{
     screen:Dashboard,
     navigationOptions: () => ({
      header:null,
      
      
   })
   }
})

export default createAppContainer(navigation);