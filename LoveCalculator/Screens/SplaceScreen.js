import React, { Component } from 'react'
import {
    Image,View,Text,StyleSheet,ImageBackground,StatusBar
} from 'react-native'

 
export default class SplaceScreen extends Component{
    state={
        text:'Love Percentage'
    }
    render(){
        return(
            <View style={Styles.Container}>
                <StatusBar 
                backgroundColor='red'/>
                <ImageBackground
                 source={require('./lv.jpeg')}
                 style={{height:'100%',width:'100%',alignItems:'center',
                 justifyContent:'center'
                 }}
                >
                <Text style={{fontSize:30,fontWeight:'bold',color:'white',marginTop:-50}}>{this.state.text}</Text>
                <Image source={require('./love.jpg')}
                 style={{borderRadius:20,marginTop:80,height:150,width:150,alignItems:'stretch'}} />
               </ImageBackground>
            </View>
        )
    }
}
const Styles=StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    }
})