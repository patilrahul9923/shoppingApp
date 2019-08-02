import React,{Component} from "react";
import { View, Text ,StyleSheet} from "react-native";
import { Appbar,TextInput } from 'react-native-paper';


export default class App extends Component{
  state = {
    text: ''
  };
  render(){
    return(

      
        <View style={design.contener}>
           

              <Appbar.Header>
                
                <Appbar.Content
          
                  title="New App"
                  
                />
                
              </Appbar.Header>

              <TextInput
                style={{margin:10,color:'red',backgraondColor:'red'}}
                      label='App input'
                      value={this.state.text}
                      onChangeText={text => this.setState({ text })}
              />
        </View>
      
    );
  }
}

const design=StyleSheet.create({
 contener:{
   flex:1,
  
 }
})