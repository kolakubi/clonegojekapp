import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import GlobalStyle from './utility/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';

export default class TambahAlamat extends Component{

    tambahAlamat = () => {
        alert('alamat ditambahkan');
    }

    render(){
        return(
            <ScrollView>

                <View style={{...GlobalStyle.container, justifyContent: "center"}}>
                    <Text style={{fontSize: 16, color: "#000"}}>Nama Penerima</Text>
                    <TextInput placeholder="ketik nama" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 20, paddingBottom: 20, marginBottom: 20}} />

                    <Text style={{fontSize: 16, color: "#000"}}>Nomor Handphone</Text>
                    <TextInput placeholder="contoh: 08120001111" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 20, paddingBottom: 20, marginBottom: 20}} />

                    <Text style={{fontSize: 16, color: "#000"}}>Koordinat Lokasi</Text>
                    <View style={{backgroundColor: "pink", width: "100%", height: 150, marginBottom: 20, alignItems: "center", justifyContent: "center"}}>
                        <Text>Google Maps</Text>
                    </View>
                    
                    <Text style={{fontSize: 16, color: "#000"}}>Alamat Lengkap</Text>
                    <TextInput placeholder="Password" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 20, paddingBottom: 20, marginBottom: 20}} />

                    {/* BUTTON TAMBAH */}
                    <TouchableOpacity style={{borderRadius:30, backgroundColor: "#ff7143", padding: 15, marginTop: 30}} onPress={this.tambahAlamat}>
                        <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Tambah Alamat</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        )
    }
}