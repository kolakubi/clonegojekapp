import React from 'react';
import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {View, Text, Button, Image, TextInput, TouchableOpacity} from 'react-native';

import Login from './components/login';
import Daftar from './components/daftar';
import LupaAkun from './components/lupaAkun';
import Beranda from './components/beranda';
import Router from './components/router';


class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    )
  }
}

export default App;
