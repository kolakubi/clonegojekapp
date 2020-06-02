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
        if(this.state.form.username === "mal" && this.state.form.password == "12345"){
            this.loginSukses();
        }
        else{
            this.loginGagal();
        }
    }

    loginSukses = () => {
        this.props.navigation.navigate('beranda');
    }

    loginGagal = () => {
        this.setState({
            modalGagalLogin: true
        })
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
            <View style={{flex: 1, backgroundColor: "#fff", padding: 20}}>

                <ModalGagalLogin 
                    visible={this.state.modalGagalLogin} 
                    tutupModal={()=>this.setState({modalGagalLogin: false})} 
                />
            
                <View style={{flex: 1}}></View>
                
                <View>

                    {/* LOGO */}
                    <Image 
                        source={logoSembako} 
                        style={{marginBottom: 40, alignSelf: "center"}}>
                    </Image>

                    {/* FORM */}
                    <TextInput 
                        placeholder="username"
                        placeholderTextColor="#ff7143" 
                        style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000"}}
                        onChangeText={(val) => this.ketik(val, "username")}
                    />
                    <TextInput 
                        placeholder="password"
                        secureTextEntry={true}
                        placeholderTextColor="#ff7143"
                        style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", marginBottom: 30}}
                        onChangeText={(val) => this.ketik(val, "password")}
                    />
                    
                    {/* BUTTON LOGIN */}
                    <TouchableOpacity 
                        style={{borderRadius:20, backgroundColor: "#ff7143", padding: 10}} 
                        onPress={this.loginDataCek}>
                        <Text 
                            style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Login
                        </Text>
                    </TouchableOpacity>

                    <View style={{height: 20}}></View>

                    {/* BUTTON DAFTAR */}
                    <TouchableOpacity 
                        style={{borderRadius:20, backgroundColor: "#75d470", padding: 10}} 
                        onPress={() => this.daftar()}>
                        <Text 
                            style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Daftar
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={{flex: 1}}></View>

                {/* LUPA PASSWORD */}
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