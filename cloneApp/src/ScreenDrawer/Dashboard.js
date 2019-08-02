import React, { Component } from 'react';
import {
  Text,StyleSheet,Button,Image,ViewPagerAndroid,
  TextInput,View,ImageBackground,TouchableOpacity
} from 'react-native';


export default class Dashboard extends Component{
    render(){
        return(
          
         <ViewPagerAndroid
            style={styles.viewPager}
         >

            <View style={styles.pageStyle} key="1">
                <Text style={{fontSize:20,color:'white'}}>First page</Text>
                <Image source={require('../ScreenDrawer/whatsapp/baby.jpg')} style={{width:60,height:60,borderRadius:30,marginVertical:10}}/>
            </View>

            <View style={styles.pageStyle} key="2">
                <Text style={{fontSize:20,color:'white'}}>Second page</Text>
                <Image source={require('../ScreenDrawer/whatsapp/baby.jpg')} style={{width:60,height:60,borderRadius:30,marginVertical:10}}/>
            </View>

            <View style={styles.pageStyle} key="3">
                <Text style={{fontSize:20,color:'white'}}>Third page</Text>
                <Image source={require('../ScreenDrawer/whatsapp/baby.jpg')} style={{width:60,height:60,borderRadius:30,marginVertical:10}}/>
            </View>
        </ViewPagerAndroid>
                                 
          
        )
    }
}

const styles=StyleSheet.create({
    viewPager: {
        flex: 1,
        backgroundColor:'#002f6c',
       
       marginTop:80,
       
      }, pageStyle: {
        alignItems: 'center',
       
        padding: 10,
        
      }
      


})