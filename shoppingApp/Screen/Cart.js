import React, { Component } from 'react'
import { Text, View,FlatList,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';


class Cart extends Component {
  constructor(props){
       super(props)
       this.state={
           allData:[] 
       }
   }

   componentDidMount=()=>{
     this.setState({allData:this.props.route.params.AllData})
    
   console.warn("data is loading ",JSON.stringify(this.props.route.params.AllData))
   }
   
   renderItem=({item})=>{
   return(
       <View style={{flex:1,padding:5}}>
          <Card>
            <View style={{flex:1,flexDirection:'row'}}>
                <Image
                    source={{uri:item.image}}
                    style={{width:'40%',height:150,margin:5}}
                />
                <View style={{margin:20,}} >
                <Text style={{fontSize:16,marginTop:10}}>Quantity : 1</Text>

                <Text style={{fontSize:16,marginTop:10}}>Price {item.price}</Text>
                </View>
                    
            </View>

            <Text
                numberOfLines={2}
                ellipsizeMode="tail"
            >{item.title}</Text>
          </Card>
           

       </View>
   )
   }

    render() {
        return (
            <View style={{flex:1}}>
                <FlatList 
                 data={this.state.allData}
                 renderItem={this.renderItem}
                 keyExtractor={(item) => item.id}
                />
                <TouchableOpacity style={{backgroundColor:'green',height:40,elevation:5,
                borderColor:'grey',
                justifyContent:'center'
                 }}>
                    <Text style={{textAlign:'center',color:'white',fontSize:20}}>Place Order</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Cart


