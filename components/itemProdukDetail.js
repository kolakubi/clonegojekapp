import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import globalStyles from './utility/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import gambarTelur from '../assets/produk/telur-isi-15.jpg';

export default class itemProdukDetail extends Component{

    tambahKeKeranjang = () => {
        alert('ditambahkan ke keranjang');
    }

    render(){
        return(
            <View style={{...globalStyles.container, alignItems: "center", }}>

                {/* THUMBNAIL */}
                <Image source={gambarTelur} style={{height: 270, width: 270, resizeMode: "contain"}} />

                <View style={{width: "100%", padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    {/* DESKRIPSI */}
                    <Text style={{fontSize: 16, fontWeight: "bold", color: "#000"}}>Telur Ayam Negeri 15 Butir</Text>
                    {/* HARGA */}
                    <Text style={{fontSize: 16, fontWeight: "bold", color: globalStyles.mainColor}}>Rp 16.500</Text>
                </View>

                {/* DESKRIPSI */}
                <Text style={{width: "90%", fontSize: 16, color: "#525252", marginTop: 20}}>Tidak hanya lezat dan mudah dimasak, telur ayam ini memiliki kandungan protein yang dibutuhkan oleh tubuh. berat 618 - 630gr</Text>

                {/* BUTTON ADD TO CART */}
                <TouchableOpacity 
                    style={{borderRadius:30, backgroundColor: "#ff7143", padding: 15, marginTop: 30, width: "80%"}} 
                    onPress={this.tambahKeKeranjang}>
                        
                    <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Tambah ke Keranjang <Icon name="shopping-cart" size={18} color="#fff"></Icon></Text>
                </TouchableOpacity>
            </View>
        )
    }
}