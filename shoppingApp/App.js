// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Screen/Home";
import Info from "./Screen/Info";
import Cart from "./Screen/Cart";
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();


function App() {
  return (
    <View style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Cart" component={Cart} />

      </Stack.Navigator>
      
    </NavigationContainer>
    </View>
    
  );
}

export default App;