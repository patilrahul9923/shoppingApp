import React, { Component } from 'react'
import {
    Text, View, StyleSheet, TouchableOpacity, Image,

} from 'react-native'
import { Appbar, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import Dash from './Dash'

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <Appbar.Header style={styles.top}>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name="md-menu" size={30} color="white" style={{ padding: 10 }} />

                    </TouchableOpacity>
                    <Image source={require('../asset/baby1.jpg')}
                        style={{
                            height: 50, width: 50,
                            borderRadius:25
                            
                        }} />
                    <Appbar.Content
                        title="Rahul"
                        subtitle="Self"
                        style={{ margin: 20 }}


                    />
                    <Image source={require('../asset/ques.png')}
                        style={{
                            height: 30, width: 30,
                            margin: 10,
                            tintColor: 'white'
                        }} />

                </Appbar.Header>


                <View style={styles.main}>
                    <View style={styles.mainOne}>
                        <View style={{
                            backgroundColor: '#707070', height: 50, width: 50,
                            borderRadius: 30,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/personal.png')}
                                style={{
                                    height: 35, width: 35,
                                    resizeMode: 'stretch',
                                }} />
                        </View>
                        <Text style={{fontSize:16,color:'white',fontWeight:'bold',margin:5,textAlign:'center'}}>Personal & Medical {'\n'}  Profile & Medical</Text>
                        <View style={{
                            backgroundColor: '#707070', height: 35, width: 35,
                            borderRadius: 30,
                            marginTop:10,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/right.png')}
                                style={{
                                    height: 20, width: 15,
                                    resizeMode: 'stretch',
                                    tintColor:'white',
                                    padding:5
                                }} />
                        </View>
                    </View>
                    <View style={styles.mainTwo}>
                        <View style={{
                            backgroundColor: '#707070', height: 50, width: 50,
                            borderRadius: 30,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/advance.png')}
                                style={{
                                    height: 35, width: 35,
                                    resizeMode: 'stretch',
                                }} />
                        </View>
                        <Text style={{fontSize:16,color:'white',fontWeight:'bold',textAlign:'center',margin:5}}>
                            Advance Directives & {'\n'}  Document</Text>
                        <View style={{
                            backgroundColor: '#707070', height: 35, width: 35,
                            borderRadius: 30,
                            marginTop:10,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/right.png')}
                                style={{
                                    height: 20, width: 15,
                                    resizeMode: 'stretch',
                                    tintColor:'white',
                                    padding:5
                                }} />
                        </View>
                    </View>
                </View>
                <View style={styles.sub}>
                    <View style={styles.subOne}>
                        <View style={{
                            backgroundColor: '#707070', height: 50, width: 50,
                            borderRadius: 30,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/speciality.png')}
                                style={{
                                    height: 35, width: 35,
                                    resizeMode: 'stretch',
                                }} />
                        </View>
                        <Text style={{fontSize:16,color:'white',fontWeight:'bold',textAlign:'center',margin:5}}>
                            Speciality {'\n'} Contacts</Text>
                        <View style={{
                            backgroundColor: '#707070', height: 35, width: 35,
                            borderRadius: 30,
                            marginTop:10,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/right.png')}
                                style={{
                                    height: 20, width: 15,
                                    resizeMode: 'stretch',
                                    tintColor:'white',
                                    padding:5
                                }} />
                        </View>
                    </View>
                    <View style={styles.subTwo}>
                        <View style={{
                            backgroundColor: '#707070', height: 50, width: 50,
                            borderRadius: 30,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/insurance.png')}
                                style={{
                                    height: 35, width: 35,
                                    resizeMode: 'stretch',
                                }} />
                        </View>
                        <Text style={{fontSize:16,color:'white',fontWeight:'bold',textAlign:'center',margin:5}}>
                            Insurance {'\n'}  Information</Text>
                        <View style={{
                            backgroundColor: '#707070', height: 35, width: 35,
                            borderRadius: 30,
                            marginTop:10,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/right.png')}
                                style={{
                                    height: 20, width: 15,
                                    resizeMode: 'stretch',
                                    tintColor:'white',
                                    padding:5
                                }} />
                        </View>
                    </View>
                </View>
                <View style={styles.subsub}>
                    <View style={styles.subsubOne}>
                        <View style={{
                            backgroundColor: '#707070', height: 50, width: 50,
                            borderRadius: 30,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/notes.png')}
                                style={{
                                    height: 36, width: 35,
                                    resizeMode: 'stretch',
                                }} />
                        </View>
                        <Text style={{fontSize:16,color:'white',fontWeight:'bold',textAlign:'center',margin:5}}>
                            Notes & Appointment {'\n'}  Checklist</Text>
                        <View style={{
                            backgroundColor: '#707070', height: 35, width: 35,
                            borderRadius: 30,
                            marginTop:10,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/right.png')}
                                style={{
                                    height: 20, width: 15,
                                    resizeMode: 'stretch',
                                    tintColor:'white',
                                    padding:5
                                }} />
                        </View>
                    </View>
                    <View style={styles.subsubTwo}>
                        <View style={{
                            backgroundColor: '#707070', height: 50, width: 50,
                            borderRadius: 30,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/presc.png')}
                                style={{
                                    height: 35, width: 35,
                                    resizeMode: 'stretch',
                                }} />
                        </View>
                        <Text style={{fontSize:16,color:'white',fontWeight:'bold',textAlign:'center',margin:5}}
                        >   Prescription {'\n'} Tracker</Text>
                        <View style={{
                            backgroundColor: '#707070', height: 35, width: 35,
                            borderRadius: 30,
                            marginTop:10,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../asset/right.png')}
                                style={{
                                    height: 20, width: 15,
                                    resizeMode: 'stretch',
                                    tintColor:'white',
                                    padding:5
                                }} />
                        </View>
                    </View>
                </View>



            </View>
        )
    }
}
const styles = StyleSheet.create({
    top: {
        backgroundColor: '#00A3E3'

    },
    main: {
        flex: 1,

        flexDirection: 'row',


    },
    sub: {
        flex: 1,

        flexDirection: 'row',

    },
    subsub: {
        flex: 1,

        flexDirection: 'row',

    },
    mainOne: {
        flex: 1,
        backgroundColor: '#93DF79',
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainTwo: {
        flex: 1,

        borderRadius: 10,
        backgroundColor: '#FB2540',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subOne: {
        flex: 1,
        backgroundColor: '#E8BB1A',
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subTwo: {
        flex: 1,
        backgroundColor: '#43B1B7',
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }, subsubOne: {
        flex: 1,
        backgroundColor: '#D13D8A',
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subsubTwo: {
        flex: 1,
        backgroundColor: '#ACACB2',
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }

})