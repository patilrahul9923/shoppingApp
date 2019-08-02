
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,StatusBar } from 'react-native';
import { Appbar,TextInput,Button } from 'react-native-paper';
import Calculate from './Calculate'


export default class MainScreen extends Component {
 
  state={
    fisrtName:'',
    lastName:'',
    Result:'loading',
   
  }

  componentWillMount(){

  }

  
 async submit(){

  
  await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fisrtName}&sname=${this.state.lastName}`, {
      headers: {
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        "X-RapidAPI-Key": "501e5b410fmsh37bc522f2a8f319p1ee492jsnc93d750b4d08"
      }
    }
      
    ).then(data=>data.json())
    .then(data2=>{
        this.setState({Result:data2})
        
        
          
         
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
        backgroundColor='#311b92'
        />
        <Appbar.Header >

          <Appbar.Content style={{alignItems:'center'}}
            title="Love % Calculator"
          />

        </Appbar.Header>
        <TextInput style={styles.inputText}
          label='First Name'
          value={this.state.fisrtName}
          onChangeText={text => this.setState({fisrtName:text })}
        />
        <TextInput style={styles.inputText}
          label='Second Name'
          value={this.state.lastName}
          onChangeText={text => this.setState({lastName:text })}
        />
        <Button style={styles.btn}icon="mood" mode="contained"
         onPress={this.submit.bind(this)}>
         Calculate
       </Button>

       <Calculate data={this.state.Result}/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',

  },
  inputText:{
    margin:5,
    marginTop:10
  },
  btn:{
    margin:10,
    padding:5
  }
});
