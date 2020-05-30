import React from 'react';
import {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class LupaAkun extends Component{

    kirimEmail = () => {
        alert('Kirim Email');
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: "#fff"}}>
                {/* <View>
                    <TouchableOpacity style={{padding: 15, width: 100}}>
                        <Text style={{color: "#ff7143", fontWeight: "bold", fontSize: 20}}>Back</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={{flex: 1}}></View>

                <View style={{width: 370, marginLeft: "auto", marginRight: "auto"}}>

                    <Text style={{color: "#ff7143", fontSize: 26, fontWeight: "bold", marginTop: 10}}>Lupa Akun</Text>
                    <Text style={{color: "#ff7143", fontSize: 26, fontWeight: "bold"}}>Kami Akan Membantu Anda</Text>

                    <TextInput placeholder="masukkan email anda" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 20, paddingBottom: 20}} />
                    

                    <TouchableOpacity style={{borderRadius:30, backgroundColor: "#ff7143", padding: 15, marginTop: 30}} onPress={this.kirimEmail}>
                        <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Kirim Saya Email</Text>
                    </TouchableOpacity>

                </View>

                <View style={{flex: 1}}></View>

            </View>
        )
    }
}