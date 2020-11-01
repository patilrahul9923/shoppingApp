

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const fcmToken = await firebase.messaging().getToken();

class App extends Component {

  componentDidMount() {
    this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
      console.warn('device token')
      // Process your token as required
    });
  }

  componentWillUnmount() {
    this.onTokenRefreshListener();

    if (fcmToken) {
      console.warn('device token',fcmToken)
  } else {
    console.warn('device token not register')
  }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});

export default App;
