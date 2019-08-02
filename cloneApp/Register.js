import React, { Component } from 'react'
import {
    Text, TextInput, Image, View, StyleSheet, TouchableOpacity,
    ImageBackground, AsyncStorage, CheckBox,ScrollView,Button
} from 'react-native'
import { Checkbox } from 'react-native-paper';
import App from './App'


import DateTimePicker from "react-native-modal-datetime-picker";

import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { RadioButton } from 'react-native-paper';


class Register extends Component {
    state = {
        email: '',
        pass: '',
        val: 'abc',
        RadioSelected: 'first',
        checked: false,
        checked2: false,
        isView:false,
        isdate:"2019-06-26"
        
    }
    render() {
        const { checked } = this.state;
        const {checked2}=this.state

        return (
       
            <View style={styles.main}>
            <ScrollView>
                 <View style={styles.MainInput}>

                    <TextInput style={styles.input}
                        placeholder='User Name'
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />

                    <TextInput style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={pass => this.setState({ pass })}
                        value={this.state.pass}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <RadioButton.Group
                            onValueChange={value => this.setState({ value })}
                            value={this.state.value}
                        >


                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton value="Male" />
                                <Text style={{ color: 'white', margin: 5, fontSize: 18 }}>Male</Text>

                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <RadioButton value="Famale" />
                                <Text style={{ color: 'white', margin: 5, fontSize: 18 }}>Female</Text>

                            </View>

                        </RadioButton.Group>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',margin:10}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked: !checked }); }}

                            />
                            <Text style={{marginTop:5,fontSize:18,color:'white'}}>Java</Text>

                        </View>
                        <View style={{ flexDirection: 'row',marginLeft:10 }}>
                            <Checkbox
                                status={checked2 ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked2: !checked2 }); }}

                            />
                            <Text style={{marginTop:5,fontSize:18,color:'white'}}>Cpp</Text>

                        </View>

                    </View>
                    
                      <Text style={{color:'white',textAlign:'center',fontSize:18}}></Text>
                       <TouchableOpacity onPress={this.showDateTimePicker}>
                     <Text style={{color:'white',textAlign:'center',fontSize:18}}>Select Date</Text>
                       </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.isView}
                            onConfirm={this.handleDate}
                            onCancel={this.cancel}
                            
                            is24Hour={false}
                        />


                    <TouchableOpacity
                        onPress={this.login}
                        style={styles.opa}>
                        <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}>Sign up</Text>
                    </TouchableOpacity>


                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 20 }}>
                    <Text style={{ fontSize: 18, color: 'black', marginBottom: 10 }}>Alredy have an account! </Text>
                    <Text style={{ fontSize: 20, color: 'red' }}>Login</Text>
                </View>
                </ScrollView>
            </View>
           
          
        )
    }

    showDateTimePicker = () => {
        this.setState({ isView: true,
          
         });
        
      };
      handleDate = date => {
        this.setState({ isView: false,isdate:date });
       
        console.warn(this.state.isdate)
      };
      cancel = () => {
        
         this.handleDate();
      };
    
    

    login = async () => {
        if (this.state.email === '' || this.state.pass === '' || this.state.value === ''||this.state.checked===false) {
            alert('Please enter all fields');
        } else {
            
            await AsyncStorage.setItem('username', this.state.email);
            await AsyncStorage.setItem('password', this.state.pass);
            
              if(this.state.checked===true&&this.state.checked2===true){
                alert('Register Successfully ' + this.state.value + "Java "+"Cpp")
              }else if(this.state.checked===true){
                alert('Register Successfully ' + this.state.value + " Java")
              }else{
                alert('Register Successfully ' + this.state.value + "Cpp")
              }

            await AsyncStorage.setItem('Logged', this.state.val);
            console.warn(this.state.value)
            this.setState({
                email: '',
                pass: '',
                value: ''
            })

            this.props.navigation.navigate('App');
            // this.props.navigation.navigate('App')
        }

    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
       
      
         backgroundColor: 'grey'

    },
    MainInput: {
      
        justifyContent: 'center',
        
        marginTop: 100,
       

    },
    input: {

        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        height: 55,
        fontSize: 18,
        backgroundColor: 'lightgrey'
    },
    opa: {
        backgroundColor: 'red',

        borderRadius: 10,
        padding: 10,
        margin: 20
    }
})


export default Register;