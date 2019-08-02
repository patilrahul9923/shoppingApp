import React, { Component } from 'react'
import{Text,View} from 'react-native'

const Calculate=(prop)=>{

    if(prop.data==='loading'){
        return(
            <Text  style={{textAlign:'center',fontSize:20,margin:10,color:'black'}}>Wait for some time</Text>
        )
    }
    if(prop.data.message){
        return(
            <Text  style={{textAlign:'center',fontSize:20,margin:10,color:'black'}}>
                Something went wrong</Text>
        )
    }
    return(
        <View>
            <Text
             style={{textAlign:'center',fontSize:20,margin:10,color:'black'}}>
             {prop.data.percentage}%</Text>
            <Text 
            style={{textAlign:'center',fontSize:20,margin:10,color:'black'}}>
            {prop.data.result}</Text>
        </View>
    )
}

export default Calculate