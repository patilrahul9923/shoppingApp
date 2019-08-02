import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TouchableOpacity,ToastAndroid, View,Image,ImageBackground} from 'react-native';
import { Appbar,TextInput,Button} from 'react-native-paper';
import {createStackNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation';

import Home from './src/Home'
import Main from './src/Main'
import Sample from './src/Sample'
import MyDrawer from './MyDrawer'



  class App extends Component{
    state = {
      email: '',
      pass:''
    };

   render(){
     return(
        <View  style={{flex:1}}>
          <Appbar.Header style={styles.Header}>
          <TouchableOpacity  
           onPress={()=>this.props.navigation.toggleDrawer()}>
          <Image source={require('./src/menu.png') } style={{height:40,width:40}}/>
         </TouchableOpacity>

         
          
            <Appbar.Content
                        title="Title"
                        subtitle="Subtitle" 
                        />
            
           </Appbar.Header>
           
           <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='stretch' source={require('./src/dd.png')}>
           <View style={styles.filed}>
                <TextInput  underlineColor='grey' style={styles.user} label="Email" value={this.state.email} 
                onChangeText={email=>this.setState({email})}
               
                />
                <TextInput underlineColor='grey' style={styles.user} label="Pass" value={this.state.pass} 
                onChangeText={pass=>this.setState({pass})}/>
                <Button style={{margin:20,backgroundColor:'red'}} 
                 mode="contained" 
                
                  onPress={()=>this.props.navigation.navigate('Home')}>Press me</Button>
                 {/* <Button title="Click me" onPress={()=>this.props.navigation.navigate('Home')}/> */}
              </View>
           </ImageBackground>

              
                
           </View>

     )
   }
}

const App=createDrawerNavigator({
 App:{
   screen:App,
   navigationOptions: () => ({
     header:null
  }),
 },
  Home:{
    screen:Home
  },
  Main:{
    screen:Main
  },
  Sample:{
    screen:Sample
  }
})

 export default createAppContainer(App);


 const styles=StyleSheet.create({

  Header:{
      backgroundColor:'red'
  },
  filed:{
      flex:1,
      justifyContent:'center',
      marginTop:-100
      
      
  },
  user:{
      marginLeft:20,  
      marginRight:20,   
       marginTop:10,
      backgroundColor:'white',  
     
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      borderRadius:10,
      
  }
})