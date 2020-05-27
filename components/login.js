import React from 'react'
import {Component} from 'react'
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native'
import logoSembako from '../assets/logo-paketsembako.png';

export default class Login extends Component{

    login = () => {
        this.props.navigation.navigate('beranda');
    }

    daftar = () => {
        this.props.navigation.navigate('daftar');
    }

    lupaAkun = () => {
        this.props.navigation.navigate('lupaAkun');
    }

    render(){

        return(
            <View style={{flex: 1}}>
        
            <View style={{flex: 1}}></View>
            <View style={{height: 400, width: 370, marginLeft: "auto", marginRight: "auto"}}>
                <Image source={logoSembako} style={{marginBottom: 40, marginLeft: "auto", marginRight:"auto"}}></Image>

                <TextInput placeholder="username" style={{width: 100+"%", borderBottomWidth: 1, borderBottomColor: "green", color: "#000"}} />
                <TextInput placeholder="password" style={{width: 100+"%", borderBottomWidth: 1, borderBottomColor: "green", marginBottom: 30}} />

                <TouchableOpacity style={{borderRadius:20, backgroundColor: "#ff7143", padding: 10}} onPress={this.login}>
                    <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Login</Text>
                </TouchableOpacity>

                <View style={{height: 20}}></View>

                <TouchableOpacity style={{borderRadius:20, backgroundColor: "#75d470", padding: 10}} onPress={() => this.daftar()}>
                    <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Daftar</Text>
                </TouchableOpacity>

            </View>

            <View style={{flex: 1}}></View>


            <View style={{height: 40}}>
            <TouchableOpacity style={{padding: 10}} onPress={this.lupaAkun}>
                <Text style={{color: "#ff7143", fontSize: 18, fontWeight: "bold"}}>Lupa Password?</Text>
            </TouchableOpacity>
            </View>
            
        </View>
        )
    }
}