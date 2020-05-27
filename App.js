import React from 'react';
import {Component} from 'react';

import {View, Text, Button, Image, TextInput, TouchableOpacity} from 'react-native';

import Login from './components/login';
import Daftar from './components/daftar';
import LupaAkun from './components/lupaAkun';
import Beranda from './components/beranda';


class App extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        {/* <Login/> */}
        {/* <Daftar /> */}
        {/* <LupaAkun/> */}
        <Beranda />
      </View>
    )
  }
}

export default App;
