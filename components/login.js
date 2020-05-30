import React from 'react'
import {Component} from 'react'
import {View, Text, Image, TouchableOpacity, TextInput, Modal} from 'react-native'
import logoSembako from '../assets/logo-paketsembako.png';
import ModalGagalLogin from './modalGagalLogin';

export default class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            form: {
                username: '',
                password: ''
            },
            modalGagalLogin: false
        }
    }

    loginDataCek = () => {
        console.log(this.state.form);
    }

    loginSukses = () => {
        this.props.navigation.navigate('beranda');
    }

    daftar = () => {
        this.props.navigation.navigate('daftar');
    }

    lupaAkun = () => {
        this.props.navigation.navigate('lupaAkun');
    }

    async testApi(){
        try{
            const a = await fetch('http://192.168.1.8/sembakoapi/users/');
            const b = await a.json();

            console.log(b);
        }
        catch(err){
            console.log('error terjadi')
        }
    }

    ketik = (val, input) => {
        this.setState({
            form: {
                ...this.state.form, 
                [input]: val}
        }); 
        //console.log(this.state.form)
    }

    render(){

        return(
            <View style={{flex: 1}}>

            <ModalGagalLogin visible={this.state.modalGagalLogin} tutupModal={()=>this.setState({modalGagalLogin: false})} />
        
            <View style={{flex: 1}}></View>
            
            <View 
                style={{height: 400, width: 370, marginLeft: "auto", marginRight: "auto"}}>
                <Image 
                    source={logoSembako} 
                    style={{marginBottom: 40, marginLeft: "auto", marginRight:"auto"}}>
                </Image>

                <TextInput 
                    placeholder="username"
                    placeholderTextColor="#ff7143" 
                    style={{width: 100+"%", borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000"}}
                    onChangeText={(val) => this.ketik(val, "username")}
                />
                <TextInput 
                    placeholder="password"
                    secureTextEntry={true}
                    placeholderTextColor="#ff7143"
                    style={{width: 100+"%", borderBottomWidth: 1, borderBottomColor: "#ff7143", marginBottom: 30}}
                    onChangeText={(val) => this.ketik(val, "password")}
                />

                <TouchableOpacity 
                    style={{borderRadius:20, backgroundColor: "#ff7143", padding: 10}} 
                    onPress={this.loginSukses}>
                    <Text 
                        style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Login
                    </Text>
                </TouchableOpacity>

                <View style={{height: 20}}></View>

                <TouchableOpacity 
                    style={{borderRadius:20, backgroundColor: "#75d470", padding: 10}} 
                    onPress={() => this.daftar()}>
                    <Text 
                        style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Daftar
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={{flex: 1}}></View>


            <View style={{height: 40}}>
            <TouchableOpacity 
                style={{padding: 10}} onPress={this.lupaAkun}>
                <Text 
                    style={{color: "#ff7143", fontSize: 18, fontWeight: "bold"}}>Lupa Password?
                </Text>
            </TouchableOpacity>
            </View>
            
        </View>
        )
    }
}