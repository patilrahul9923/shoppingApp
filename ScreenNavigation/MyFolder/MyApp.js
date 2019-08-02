import React, { Component } from 'react'
import {
    View,StyleSheet,Button
} from 'react-native'
import { Appbar,TextInput } from 'react-native-paper';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from '../src/Home';




 
 

export default class MyApp extends Component{
    state = {
        email: '',
        pass:''
      };
    render(){
        return(
      <View  style={{flex:1}}>
          <Appbar.Header style={styles.Header}>
        
            <Appbar.Content
                        title="Title"
                        subtitle="Subtitle"
                        />
        
           </Appbar.Header>
               <View style={styles.filed}>

                 <TextInput   style={styles.user} label="Email" value={this.state.email} 
                 onChangeText={email=>this.setState({email})}
                
                 />
                 <TextInput  style={styles.user} label="Pass" value={this.state.pass} 
                 onChangeText={pass=>this.setState({pass})}/>
                 {/* <Button style={{margin:10,backgroundColor:'red'}} 
                  mode="contained" 
                  onPress={() => this.props.navigation.navigate('Home') }>Press me</Button> */}
                  <Button title="HIIIIIII" onPress={()=>this.props.navigation.navigate('Home')}/>
               </View>
                
           </View>

            
        );
    }
}

const styles=StyleSheet.create({

     Header:{
         backgroundColor:'red'
     },
     filed:{
         flex:1,
         justifyContent:'center',
     },
     user:{
         margin:10,        
     }
})

