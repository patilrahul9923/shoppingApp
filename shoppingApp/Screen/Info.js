import React,{useState} from 'react'
import { Text, StyleSheet, View ,TextInput, TouchableOpacity, ScrollView} from 'react-native';
// import {TextInput} from 'react-native-paper';

const Info=({route, navigation})=>{
  const [adds1, setadds1] = useState("")
  const [adds2, setadds2] = useState("")
  const [place, setplace] = useState("")
  const [city, setcity] = useState("")
  const [state, setstate] = useState("")
  const [pincode, setpincode] = useState("")


    const { Data } = route.params;
     console.warn("Data is ",JSON.stringify(Data));

    return(
          
        <View style={{padding:10,margin:5,flex:1}}>
          <TextInput 
            placeholder="Adds line 1"
            style={{borderBottomWidth:1,borderBottomColor:'grey',margin:5,fontSize:16}}
            onChange={(text)=>setadds1(text)}
          />

          <TextInput 
            placeholder="Adds line 2"
            onChange={(text)=>setadds2(text)}
            style={{borderBottomWidth:1,borderBottomColor:'grey',margin:5,fontSize:16}}
          />
          <TextInput 
            placeholder="Place"
            onChange={(text)=>setplace(text)}
            style={{borderBottomWidth:1,borderBottomColor:'grey',margin:5,fontSize:16}}
          />

          <TextInput 
            placeholder="City"
            onChange={(text)=>setcity(text)}
            style={{borderBottomWidth:1,borderBottomColor:'grey',margin:5,fontSize:16}}
          />
          <TextInput 
            placeholder="Pincode"
            onChange={(text)=>setpincode(text)}
            keyboardType="numeric"
            style={{borderBottomWidth:1,borderBottomColor:'grey',margin:5,fontSize:16}}
          />
          <TextInput 
            placeholder="State"
            onChange={(text)=>setstate(text)}
            style={{borderBottomWidth:1,borderBottomColor:'grey',margin:5,fontSize:16}}
          />
          
          <TouchableOpacity
            onPress={() => {navigation.navigate('Cart',{
              AllData:Data
            })}}

           style={{
             justifyContent:'center',
             alignItems:'center',
             backgroundColor:'#ff793f',
             width:60,
             height:60,
             alignSelf:'flex-end',
             position:'absolute',
             bottom:20,
             right:20,
             padding:5,
             borderRadius:50,
             elevation:5
            
          }}>
              <Text style={{margin:5,fontSize:15,color:'white',fontWeight:'bold'}}>next</Text>
          </TouchableOpacity>
          
        </View>
    )
    
}


const styles = StyleSheet.create({})
export default Info;