
import React, {Component} from 'react';  //imrc+tab  shortcut
import {StyleSheet, Text, View,Button,TextInput,Image} from 'react-native';
import { logicalExpression } from '@babel/types';

  









export default class App extends Component {

 
   
     
   
  render() {
    
    return (
      <View style={{flex:1}}>
         <View style={{flex:0.2,backgroundColor:'grey',flexDirection:'row'}}>
            <Image  style={{height:50,width:50,justifyContent:'center',margin:10}} 
            source={require('./src/logo.jpg')}/>
            <Text style={{textAlign:'center',fontSize:20,color:'white', padding:10,marginLeft:50}}>DocBoyz</Text>
          
           
         </View>
         <View style={{flex:1, backgroundColor:'grey',flexDirection:'row'}}>
             <View style={{ flex:1,backgroundColor:'red'}}>
             <View style={{ flex:1, backgroundColor:'orange'}}></View>
             <View style={{flex:1, backgroundColor:'black'}}></View>
             </View>
             <View style={{flex:1,backgroundColor:'pink'}}>
             <View style={{flex:1, backgroundColor:'red'}}></View>
           <View style={{flex:1, backgroundColor:'yellow'}}></View>
             </View>
         </View>
         <View style={{flex:1, backgroundColor:'red', flexDirection:'row'}}>
         <View style={{flex:1,backgroundColor:'blue'}}>
           <View style={{flex:1, backgroundColor:'orange'}}></View>
           <View style={{flex:1, backgroundColor:'black'}}></View>

         </View>
             <View style={{flex:1,backgroundColor:'red'}}>
             <View style={{flex:1, backgroundColor:'green'}}></View>
           <View style={{flex:1, backgroundColor:'red'}}></View>
             </View>
         </View>


      </View> 
    );
  }
}

const styles = StyleSheet.create({

    
  
 
  
  
});
