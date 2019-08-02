import react,{Component} from 'react'
import{
  Text,StyleSheet,View,AppRegistry
} from 'react-native'


export default class App extends Component
{
  render(){
    return(
            <View style={Styles.parent}>
            <View style={Styles.chield1}></View>
            <View style={Styles.chield2}></View>
            
            </View>
    );
  }
  
}

const Styles= StyleSheet.create({
    parent:{
       flex:1,
       flexDirection:row
    },
    chield1:{
      flex:1,
      backgraundColor:'red'
       
    },
    chield2:{
     flex:1,
     backgraundColor:'green'
    }
});