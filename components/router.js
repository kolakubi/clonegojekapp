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
import Request from './request';
import Transaksi from './transaksi';
import AlamatSaya from './alamatSaya';
import TambahAlamat from './tambahAlamat';
import Notifikasi from './notifikasi';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class Router extends Component{

    render(){

        const headerOption = {
            title: "Buat Akun",
            headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: "#ff7143",
            }
        }

        return(
            <Stack.Navigator initialRouteName="notifikasi">
                <Stack.Screen name="welcome" component={Welcome} options={{headerShown: false}} />
                <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="beranda" component={Beranda} options={{headerShown: false}} />
                <Stack.Screen 
                    name="daftar" 
                    component={Daftar} 
                    options={headerOption} />
                <Stack.Screen 
                    name="lupaAkun" 
                    component={LupaAkun} 
                    options={{...headerOption, title: "Lupa Akun"}} />
                <Stack.Screen 
                    name="cart" 
                    component={Cart}
                    options={{...headerOption, title: "Cart"}} />
                <Stack.Screen 
                    name="request" 
                    component={Request}
                    options={{...headerOption, title: "Request Produk"}} />
                <Stack.Screen 
                    name="transaksi" 
                    component={Transaksi}
                    options={{...headerOption, title: "Transaksi"}} />
                <Stack.Screen 
                    name="alamatSaya" 
                    component={AlamatSaya}
                    options={{...headerOption, title: "Alamat Saya"}} />
                 <Stack.Screen 
                    name="tambahAlamat" 
                    component={TambahAlamat}
                    options={{...headerOption, title: "Tambah Alamat"}} />
                 <Stack.Screen 
                    name="notifikasi" 
                    component={Notifikasi}
                    options={{...headerOption, title: "Notifikasi"}} />
            </Stack.Navigator>
        )
    }
}