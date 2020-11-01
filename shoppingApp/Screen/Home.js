import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, SafeAreaView,Image,ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
const listApi = "https://fakestoreapi.com/products?limit=10";


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      listData: [1, 2, 2, 3, 4, 5, 6],
      loading:false,
      renderData:[],
      selectedItems:[]

    }
  }

  componentDidMount = async () => {
    this.setState({loading:true})
    await fetch(listApi)
      .then(res => res.json())         // fetch api data for listing products
      .then(response => {
        console.warn("dtat  ", response);
        this.setState({loading:false})
        this.setState({renderData:response})
      }).catch(error=>{
        console.warn("Error message is ......... ",error.message);
      })
      // console.warn("Componentdidmount calling")

  }

  renderItem = ({ item }) => {
    //  console.warn("data ",item)
    return (
      

        <TouchableOpacity onPress={() => this.onPressHandler(item)}>
          <View 
          style={
              item.selected==true
                ? {
                  margin:5,
                  alignItems:'center',
                  elevation:5,
                    backgroundColor: 'red',
                   borderColor:'grey',
                  // borderWidth:1,
                    margin:5,
                    elevation:5
                  }
                : {
                  margin:5,
                  alignItems:'center',
                  elevation:5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    margin:5,
                    elevation:5,
                  }
            }>
            

            <Image 
                resizeMode={"stretch"}
                style={{width:300,height:200,alignSelf:'center',margin:5}}
                    source={{uri:item.image}}/> 
              <Text>{item.title}</Text> 
              <Text style={{color:'red'}}>Price : {Math.round(item.price)} rs.</Text>
          

            </View>
         
        </TouchableOpacity>
    );
  };

  onPressHandler(item) {
    let renderData=[...this.state.renderData];
    // console.log("function calling "+JSON.stringify(renderData))
    for(let data of renderData){
      if(data.id==item.id){
        data.selected=(data.selected==null)?true:!data.selected;
           if(data.selected==true){
             this.state.selectedItems.push(item)
           }else{
             const index=this.state.selectedItems.indexOf(item.id)
            this.state.selectedItems.splice(index,1) // parameter: possition and second remove number of

           }
        console.warn("selected "+JSON.stringify(this.state.selectedItems))
        break;
      }
    }
    this.setState({renderData});
  }




  render() {
    if(this.state.loading){
       return(
           <View style={{flex:1,justifyContent:'center'}}>
           <ActivityIndicator size="large" color="black"  /> 
           </View>

       )
    }else{
      let Data=this.state.selectedItems
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.renderData}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            extraData={this.selectedId}
          />
          {
            this.state.selectedItems.length>0 
            ? 
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Info', {
              Data:Data,
            });
          }} style={styles.addBtn}>
             <Text style={{textAlign:'center',color:'white',fontSize:20}}>
                Add Product
             </Text>
          </TouchableOpacity>
          :
          null

          }
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  addBtn:{
     width:'100%',
     height:40,
     backgroundColor:'green',
     borderRadius:5,
     justifyContent:'center'
   
  }

})
