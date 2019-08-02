import React, { Component } from 'react'
import {View,Text,Image} from 'react-native'
import { createAppContainer } from 'react-navigation';
import {createStackNavigator,createMaterialTopTabNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons'
import Chat from "./whatsapp/Chat"
import Status from "./whatsapp/Status"
import Calls from "./whatsapp/Calls"




class Settings extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Settings Drawer</Text>
            </View>
        )
    }
}

const app=createMaterialTopTabNavigator({
    Chat:{
        screen:Chat
    },
    Status:{
        screen:Status
    },
    Calls:{
        screen:Calls
    }
},{
    tabBarOptions:{
        style:{
            backgroundColor:'#047a6c'
        },
        labelStyle: {
            fontSize: 14,
            fontWeight:'bold'
          },

    }
}
)

const myStack= createStackNavigator({
    screen:app
},{
    defaultNavigationOptions:{
        title:'Whatsapp',
        headerStyle:{
            backgroundColor:'#047a6c'       // whats app header color
        },
        headerTintColor:'#FFFFFF',
        headerTitleStyle:{
            fontWeight:'bold'
        },
        headerRight:(
            <View style={{flexDirection:'row',padding:10}}>
             <Icon name="md-search" size={32} color="white"/>
             <Icon name="md-more" size={32} color="white" style={{marginLeft:15}}/>
            </View>
        )  
        
    }
}
)

export default createAppContainer(myStack);
