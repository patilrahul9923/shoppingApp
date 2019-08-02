import React, { Component } from 'react'
import {
  Text,StyleSheet,SafeAreaView,ScrollView,
  Button,Image,TextInput,View,ToastAndroid,
  ImageBackground,TouchableHighlight,TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { Appbar,Card } from 'react-native-paper';
import { createStackNavigator,DrawerItems, createAppContainer,createDrawerNavigator } from "react-navigation";

import Settings from './ScreenDrawer/Settings';
import Contact from './ScreenDrawer/Contact';
import Dashboard from './ScreenDrawer/Dashboard';

const CustomDrawerComponent=(props)=>(
  <SafeAreaView>
    <View style={{alignItems:'center',backgroundColor:'white'}}>
      <Image source={require('./dd.png')} 
      style={{height:120,width:120,borderRadius:60,margin:40}}
      />
    </View>
    <ScrollView>
     <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
);


class Home extends Component{

    render(){
        return(
            <View style={{flex:1,}}>
                    <Appbar.Header style={styles.top}>

                    <TouchableOpacity  onPress={()=>this.props.navigation.toggleDrawer()}>
                    <Icon name="md-menu" size={36} color="white" style={{margin:10,padding:10}}/>
                    
                    </TouchableOpacity>

                        <Appbar.Content
                        title="Home"
                        style={{alignItems:'center',marginLeft:-40}}

                        
                        />
                
                 </Appbar.Header>
                 
                    <Text style={{fontSize:20,color:'red',textAlign:'center',marginBottom:20,marginTop:20}}>Hello Rahul</Text> 

                 <View style={styles.row1}>
                       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Settings')}>
                       <View style={styles.dash}>
                               <View>
                               <Image source={require('./documentspickup.png')}
                               style={{width:40,height:40,tintColor:'white'}}
                                 />
                                 <Text style={{color:'white'}}>Pick Up</Text>
                               </View>
                         </View>
                       </TouchableOpacity>
                        
                       <TouchableOpacity  onPress={()=>ToastAndroid.show('Clicked Kiya',ToastAndroid.SHORT)}>
                         <View style={styles.dash}>
                         <View>
                         
                               <Image source={require('./file.png')}
                               style={{width:40,height:40,tintColor:'white'}}
                                 />
                                 <Text style={{color:'white'}}>Library</Text>
                               </View>
                              
                         </View>
                         </TouchableOpacity>
                
                    
                 </View>
            
                 <View style={styles.row2}>
                                    
                        <View style={styles.dash}>
                        <View>
                               <Image source={require('./ratings.png')}
                               style={{width:40,height:40,tintColor:'white'}}
                                 />
                                 <Text style={{color:'white'}}>Rattings</Text>
                               </View>
                        </View>
                        <View style={styles.dash}>
                        <View>
                               <Image source={require('./rupees.png')}
                               style={{width:40,height:40,tintColor:'white'}}
                                 />
                                 <Text style={{color:'white'}}>Redeem</Text>
                               </View>
                        </View>
                                    
                </View>
                <View style={{height:200,justifyContent:'center', marginTop:20}}>
                <Dashboard />
                </View>
              
            </View>
        )
    }
}

const styles=StyleSheet.create({
    top:{
        backgroundColor:'red'
        
    },
    row1:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:30
        
       
      },
      row2:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:30
     
      },
    dash:{
        backgroundColor:'red',
        height:130,
        width:130,
        borderRadius:90,
        justifyContent:'center',
        alignItems:'center'
        
    }
})

const app=createDrawerNavigator({
    Home:{
        screen:Home,
       
    },
    Settings:{
        screen:Settings
    },
    Contact:{
        screen:Contact
    },
    
},

    {
      contentComponent:CustomDrawerComponent
    
  }
)

export default createAppContainer(app)


