

import React, {Component} from 'react';
import {StyleSheet,View,Button,Text,TouchableOpacity} from 'react-native';



export default class App extends Component {

  constructor(){
    super()
    this.state={
      textResult:''
    }
  }
  pressdButton(text)
  {
    console.log(text);
     this.setState({
        textResult: this.state.textResult + text
         
     })

  }

  operate(oppp)
  {
   switch(oppp)
   {
     case 'D':
       let text=this.state.textResult.split('')
       text.pop()
       

       this.setState({
         textResult:text.join('')
       })
       break;
   }
    
  }


  render() {

   let rows=[]
   let num=[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    let opp=['D','+','-','*','/']
    for(let i=0;i<4;i++)
    {
      let row=[]
      for(let j=0;j<3;j++)
      {
        row.push(
          <TouchableOpacity  onPress={()=>this.pressdButton(num[i][j])} style={styles.btn}>
          <Text style={styles.btnText}>{num[i][j]}</Text>
          </TouchableOpacity> 
          )
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    let ops=[]
  for(let i=0;i<4;i++)
  {
    ops.push(<TouchableOpacity onPress={()=>this.operate(opp[i])} style={styles.btn }>
      <Text style={[styles.btnText, styles.white]}>{opp[i]}</Text>
      </TouchableOpacity> )
  }




    return (
      <View style={styles.parent}>
        <View style={styles.Calculation}>
            <Text style={styles.ResultText}>{this.state.textResult}</Text>
         </View> 
         <View style={styles.Result}>
            <Text style={styles.ResultText}>
           123</Text>
         </View>

           <View style={styles.Numbers}>
               <View style={styles.numeric}>
                 {rows}
               </View>

                <View style={styles.operation}>
                   {ops}
                </View>
                
         </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent:{
     flex:1,
     backgroundColor:'white'
  },
  row:{
     
     
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'row',
      
      padding:20

    

  },
  ResultText:{
    color:'red',
    fontSize:25,
    
  },
  
  Calculation:{
    flex:2,
    flexDirection:'row',
    backgroundColor:'grey',
    alignItems:'center',
    justifyContent:'flex-end' 
  },
  Result:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'flex-end' 
  },
  Numbers:{
    flex:7,
    flexDirection:'row',
    backgroundColor:'green'
  },
  operation:{
    flex:1,
    backgroundColor:'black',
   
     
  },
  numeric:{
    flex:4,
    flexDirection:'column',
    
    justifyContent:'space-around'
    
  },
  btn:{
    flex:1,
     alignItems:'center',
    justifyContent:'center',  
    alignSelf:'stretch'
  },
  btnText:{
fontSize:30
  },
  white:{
    color:'white'
  }

 
  
 





 
});
