import React from 'react';
import {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class Request extends Component{

    kirimRequest = () => {
        alert('Request Terkirim');
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center"}}>
                <View style={{width: "85%"}}>

                    <Text style={{color: "#ff7143", fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 20}}>Request Produk</Text>
                    <Text style={{textAlign: "center", color: "#000", fontSize: 14}}>Tulis produk apa yang biasa anda beli</Text>
                    <Text style={{textAlign: "center", color: "#000", fontSize: 14}}>Kami akan sediakan untuk anda</Text>

                    <Text style={{marginTop: 35, fontSize: 12, color: "red"}}>Nama Produk - Berat/Ukuran - Pembelian Per Bulan*</Text>

                    <Text style={{marginTop: 10, fontSize: 14, color: "#cccdd2"}}>Contoh: Kecap Bango - 135ml - 10 Dus</Text>

                    <TextInput placeholder="tulis request produk" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 20, paddingBottom: 20}} />
                    

                    <TouchableOpacity style={{borderRadius:30, backgroundColor: "#ff7143", padding: 15, marginTop: 30}} onPress={this.kirimRequest}>
                        <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Kirim Request</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}