import React from 'react';
import {Component} from 'react';

import { createStackNavigator, createAppContainer } from '@react-navigation/stack';

import Login from './login';
import LupaAkun from './lupaAkun';
import Daftar from './daftar';
import Beranda from './beranda';

// const Stack = createStackNavigator({
    
//     LupaAkun: {
//         screen: LupaAkun
//     }
// });

// const Router = createAppContainer(Stack)

// export default Router;

const Stack = createStackNavigator();

export default class Router extends Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="beranda" component={Beranda} />
                <Stack.Screen name="daftar" component={Daftar} />
                <Stack.Screen name="lupaAkun" component={LupaAkun} />
            </Stack.Navigator>
        )
    }
}