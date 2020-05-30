import React from 'react';
import {Component} from 'react';

import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './login';
import LupaAkun from './lupaAkun';
import Daftar from './daftar';
import Beranda from './beranda';
import Cart from './cart';
import Welcome from './welcome';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class Router extends Component{
    render(){
        return(
            <Stack.Navigator initialRouteName="beranda">
                <Stack.Screen name="welcome" component={Welcome} options={{headerShown: false}} />
                <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="beranda" component={Beranda} options={{headerShown: false}} />
                <Stack.Screen name="daftar" component={Daftar} />
                <Stack.Screen name="lupaAkun" component={LupaAkun} />
                <Stack.Screen name="cart" component={Cart} />
            </Stack.Navigator>
        )
    }
}