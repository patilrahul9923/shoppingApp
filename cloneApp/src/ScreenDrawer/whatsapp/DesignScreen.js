import React, { Component } from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

export default class DesignScreen extends Component{
    render(){
        return(
            <View style={styles.Container}>
               <Image source={require('./baby.jpg')}
                style={{margin:10,width:60,height:60,borderRadius:30}}/>
                <View style={styles.text}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Baby</Text>
                  <Text>Hi...</Text>
                  <View style={{flexDirection:'row'}}
                    style={{borderWidth: 0.5,
                            width:220,
                          borderColor:'lightgrey',
                           marginTop:15,
                           
                         }}/>
                </View>

                <Text style={{marginTop:20,color:'green'}}>1:21 PM</Text>
                                 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:0
    },
    text:{
        flexDirection:'column',
        marginTop:15,
        marginLeft:5
    }
});