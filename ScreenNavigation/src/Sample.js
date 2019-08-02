import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Sample extends Component{
   render(){
       return(
           <View>
               <Text>This is sample</Text>
               <Button title="Go to Home"
                onPress={()=>this.props.navigation.navigate('Home')}></Button>
           </View>
       )
   }
}