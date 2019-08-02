
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { throwStatement } from '@babel/types';

export default class App extends Component {
  
  constructor(){
    super()
    this.state = {
     dataList: []
    }
    console.warn("constructor")

}
  async componentDidMount(){
    await fetch('http://dummy.restapiexample.com/api/v1/employees').
    then((res)=>res.json()).
    then((res2)=>{
      console.warn(res2)
      this.setState({
        dataList:res2
      }) 
       })
  }

  renderItem=(data)=>{
    console.warn(data)
    return(
      <View>
      <View>
      
        <Text>{data.item.id}</Text>
        <Text>{data.item.employee_name}</Text>
        <Text>{data.item.employee_salary}</Text>
        <Text>{data.item.employee_age}</Text>
        
      
       
      </View>
     
      </View>
    )
  }
  
  render=()=> {
    console.warn("render",this.state.dataList)
    return (
      <View >
        <FlatList
          data={this.state.dataList}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

