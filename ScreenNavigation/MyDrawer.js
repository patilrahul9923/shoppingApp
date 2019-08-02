import React, { Component } from 'react';
import {Button,StyleSheet} from 'react-native';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';


 class MyDrawer extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
  }

   class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
    
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }


  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
  const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: MyDrawer,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });
  
  const MyApp = createAppContainer(MyDrawerNavigator);

export default createAppContainer(MyApp)