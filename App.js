import React from 'react';
import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Router from './components/router';

import {View} from 'react-native';
import Cart from './components/cart';


class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      // <View style={{flex: 1}}>
      //   <Cart />
      // </View>
    )
  }
}

export default App;
