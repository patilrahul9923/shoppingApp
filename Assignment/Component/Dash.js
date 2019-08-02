import React, { Component } from 'react'
import {
    Text, View,StyleSheet,TouchableOpacity,Image,
   
} from 'react-native'
import { Appbar, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'

 const Dash=()=>{
    return(
        <View style={styles.main}>

             <View style={styles.sub}></View>
             <View style={{backgroundColor:'blue'}}></View>
             <View style={styles.sub}></View>
             
        </View>
    )
}
const styles=StyleSheet.create({
main:{
    flex:1,
   
},
sub:{
    flex:1,
    backgroundColor:'green'
}
})
export default Dash;