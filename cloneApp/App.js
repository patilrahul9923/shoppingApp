import React, { Component } from 'react'
import {
  Text,StyleSheet,Button,AsyncStorage,
  Image,TextInput,View,ImageBackground,TouchableOpacity
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

 import Home from './src/Home';
 import Register from './Register'




 
 var userName;
 var pass;
 var l;
 
 const user=async()=>{
   userName= await AsyncStorage.getItem('username');
   pass= await AsyncStorage.getItem('password');
   l=await AsyncStorage.getItem('Logged');
    if(l==='abc')   
    {
      this.props.navigation.navigate('Home')
      console.warn("Call Home")
    }
  
 } 
  

 class App extends Component{
  
  

  state={
     text:'',
     pass:''
  }

  login=async()=> {
    if(userName===this.state.text && pass===this.state.pass)
    {
      this.props.navigation.navigate('Home')
    }
    else
    {
     
      alert("Username and password is incorrect")
    }
    
  }

  componentDidMount(){
    user()
  }


render(){
  return(
    <View style={nav.Container}>
    <ImageBackground style={{width:'100%',height:'100%'}}source={require('./src/dd.png')}>
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <Image style={nav.ImageEdit} source={require('./src/logo.png')}/>
         </View>
       <View style={nav.MainInput}>
         
         <TextInput  style={nav.input} 
         placeholder='User Name' 
         autoCapitalize="none"
         onChangeText={text=>this.setState({text})}
         value={this.state.text}
         />

         <TextInput  style={nav.input} 
         placeholder='Password' 
         secureTextEntry={true}
         onChangeText={pass=>this.setState({pass})}
         value={this.state.pass}
         />

         <TouchableOpacity 
         onPress={this.login}
        // onPress={()=>this.props.navigation.navigate('Home')}
         style={nav.btnLogin}>
           <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Login</Text>
         </TouchableOpacity>
         
        <View style={{flexDirection:'row',margin:30}} >
           <Text style={{fontSize:18,color:'white'}}>Register your account here!</Text>
           <Text onPress={()=>this.props.navigation.navigate('Register')} style={{fontSize:20,color:'white',color:'red'}}> SignUp</Text>
        </View>
       
       </View>
       {/* <Button style={{Color:'red',padding:20}} title='Click' onPress={()=>console.log('')} /> */}
    </ImageBackground>

    </View>
  )
}

}

const nav=StyleSheet.create({
   Container:{
     flex:1,
   
   },
   MainInput:{
      flex:1,
      justifyContent:'center',
      marginTop:-50
    
   },
   ImageEdit:{
     height:140,
     width:140,
     borderRadius:70,
     marginTop:50

   },
   input:{
     
    backgroundColor:'white',
     margin:10,
     borderRadius:10,
     padding:10,
     height:55,
     fontSize:18,
     backgroundColor:'lightgrey' 
   },
   btnLogin:{
      backgroundColor:'darkred',
      padding:10,
      marginTop:20,
      marginLeft:80,
      marginRight:80,
      borderRadius:5,
      height:50,
      
      
   }
  
})

var MyApp


if(user.l=='abc')
{
  
  
  MyApp=createStackNavigator({
    Home:
    {screen:Home,
      navigationOptions: () => ({
        header:null,
        
        
     }),}
   
   
    
  });
 
  

}
else{
MyApp=createStackNavigator({
  

  Login:{
    screen:App,
    navigationOptions: () => ({
      header:null
      
   }),
  },
  Home:
  {screen:Home,
    navigationOptions: () => ({
      header:null,
      
      
   }),
  },
  Register:{
    screen:Register,
       
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: 'red'
      },
      
      
   }),
  }
}

);


}
export default createAppContainer(MyApp);