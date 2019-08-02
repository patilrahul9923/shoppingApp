import React, { Component } from 'react'
import{
    Text,Image,View,SafeAreaView,ScrollView
} from 'react-native'

import { createDrawerNavigator,DrawerItems, createAppContainer } from "react-navigation";

import Home from './Component/Home'
import Profile from './Component/Profile'

const CustomDrawerComponent=(props)=>(
  <SafeAreaView>
    <View style={{alignItems:'center',backgroundColor:'white',}}>
     <Image source={require('./asset/baby1.jpg')}
     style={{height:200,width:'100%'}}/>
     
      
    </View>
    <ScrollView>
     <DrawerItems {...props}/>
    </ScrollView>
    </SafeAreaView>
)

const MyDrawerNavigator = createDrawerNavigator({
   
    Home: {
      screen: Home,
    },
    Profile: {
      screen: Profile,
    },
   },
   {
    contentComponent:CustomDrawerComponent
  
});
  
  const MyApp = createAppContainer(MyDrawerNavigator); 

  

export default class Dashboard extends Component{
    render(){
        return( 
          <MyApp />
     
        )
      
    }
}



