import React, { Component } from 'react'
import {View,Text,Image,ScrollView} from 'react-native'
import DesignScreen from './DesignScreen'
export default class Calls extends Component{
    render(){
        return(
         <View style={{flex:1,marginTop:10}}>
            
            <ScrollView>
           <DesignScreen />
           <DesignScreen />
           <DesignScreen />
           <DesignScreen />
           <DesignScreen />
           <DesignScreen />
           <DesignScreen />
           <DesignScreen />
           <DesignScreen />
           <DesignScreen />
           </ScrollView>
        </View>
       
        )
    }
}