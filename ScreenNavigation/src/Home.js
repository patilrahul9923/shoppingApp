
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';




export default class Home extends Component {
static navigationOptions={
    title:'Home'
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home screen!</Text>
        <Button title="Go to Main screen" onPress={()=>this.props.navigation.navigate("Main")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});