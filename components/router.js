import React from 'react';
import {Component} from 'react';

import { createStackNavigator, createAppContainer } from '@react-navigation/stack';

import Login from './login';
import LupaAkun from './lupaAkun';
import Daftar from './daftar';
import Beranda from './beranda';
import Cart from './cart';

const Stack = createStackNavigator();

export default class Router extends Component{
    render(){
        return(
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="beranda" component={Beranda} />
                <Stack.Screen name="daftar" component={Daftar} />
                <Stack.Screen name="lupaAkun" component={LupaAkun} />
                <Stack.Screen name="cart" component={Cart} />
            </Stack.Navigator>
        )
    }
}