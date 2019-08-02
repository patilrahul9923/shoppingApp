
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';




export default class Main extends Component {
    static navigationOptions={
        title:'Main'
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Main screen!</Text>
         <Button title="Go to Samplr screen" onPress={()=>this.props.navigation.navigate("Sample")}/>
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