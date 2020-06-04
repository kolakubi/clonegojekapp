import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import GlobalStyle from './utility/globalStyles';

export default class Notifikasi extends Component{
    render(){
        return(
            <View style={{...GlobalStyle.container, backgroundColor: "#fafafa"}}>
                <TouchableOpacity 
                    style={{justifyContent: "space-between", paddingVertical: 20, paddingHorizontal: 10, borderWidth: 0.5, borderColor: "#fafafa", marginBottom: 15, backgroundColor: "#fff"}}
                    onPress={this.navigateToTambahAlamat}>

                    <Text style={{color: "#000", fontSize: 14}}>Keterlambatan Pengiriman</Text>
                    <Text style={{color: "#9c9c9c"}}>Mohon maaf dikarenakan wabah Covid-19, pengiriman akan terlambah 1-2 hari</Text>
                    <Text style={{marginTop: 15, color: "green"}}>Belum dilihat</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{justifyContent: "space-between", paddingVertical: 20, paddingHorizontal: 10, borderWidth: 0.5, borderColor: "#fafafa", marginBottom: 15, backgroundColor: "#fff"}}
                    onPress={this.navigateToTambahAlamat}>

                    <Text style={{color: "#000", fontSize: 14}}>Member Verification</Text>
                    <Text style={{color: "#9c9c9c"}}>Pendaftaran Berhasil, kode verivikasi telah dikirim ke email anda</Text>
                    <Text style={{marginTop: 15}}>Dilihat</Text>
                </TouchableOpacity>
            </View>
        )
    }
}