import React, {Component} from 'react';

import{
  AppRegistry,Text,View,Button,StyleSheet,
  TextInput
} from 'react-native';


export default class LoginAct extends Component{

 
render(){
   return(
     <View style={styles.contener}>
       <Text style={styles.myText}>Login Page</Text>
       <TextInput style={styles.inputtext} placeholder="Name"></TextInput>  
       <TextInput style={styles.inputtext} placeholder="Email"></TextInput> 

       <Button 
       onPress={this.myfunc}
       title="Submit" 
      />
        
       
     </View>
   
      
   );
 }

 myfunc(){
  alert('Clicked');
}

}


const styles= StyleSheet.create({
   contener:{
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    flexGrow:1,
    alignItems:'center',
    flex:1
  },
  myText:{
    color:'red',
    fontSize:30,
  

  },
  inputtext:{
    fontSize:20,
    color:"red",
    width:'90%',
    borderWidth:2,
    borderColor:'green',
    margin:10,
  },
  
});
