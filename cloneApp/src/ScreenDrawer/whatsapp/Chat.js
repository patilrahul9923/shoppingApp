import React, { Component } from 'react'
import {View,Text,Image,StyleSheet,ScrollView,ToastAndroid} from 'react-native'
import DesignScreen from './DesignScreen'
export default class Chat extends Component{
    render(){
        return(
            <View style={styles.Container}>
                <ScrollView>
                <DesignScreen />
                <DesignScreen/>
                <DesignScreen/>
                <DesignScreen/>
                <DesignScreen/>
                <DesignScreen/>
                <DesignScreen/>
                <DesignScreen/>
                <DesignScreen/>
                <DesignScreen/>
                <DesignScreen/>
                <DesignScreen/>
                
              
               </ScrollView>
            </View>
        )
    }

    loop=()=>{
       
    }
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        marginTop:10
         
    }
});