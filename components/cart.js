import React, {Component} from 'react';

import {View, Text, TouchableOpacity, TextInput, ScrollView, Image} from 'react-native';

import ItemProduk from './itemProduk';
import logoCod from '../assets/cod-logo.jpg';
import logoMaps from '../assets/icon/map-marker-icon-mini.png';
import produkTepung from '../assets/produk/produk-tepung.png';


import CartDeskripsi from './cartDeskripsi';

export default class Cart extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor: "#fff"}}>
                <View style={{flex: 1, alignItems: "center", marginTop: 20}}>

                    {/* DIKIRIM */}
                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>

                        <Text style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10}}>Dikirim</Text>
                        
                        <TouchableOpacity>
                            <View style={{paddingVertical: 10, flexDirection: "row", alignItems: "center"}}>
                                <Image source={logoMaps} style={{height: 40, width: 40, resizeMode:"contain"}} />
                                <Text style={{fontSize: 14}}>Pilih Alamat Pengiriman</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* PESANAN */}
                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Pesanan</Text>
                        
                        <ItemProduk judul="Tepung Segitiga 1kg" harga="Rp 17.000" image={produkTepung} />
                    </View>

                    {/* PEMBAYARAN */}
                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Pembayaran</Text>
                        
                        <TouchableOpacity>
                            <Image source={logoCod} />
                        </TouchableOpacity>
                        
                    </View>

                    {/* CATATAN PEMBELI */}
                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Catatan Pembeli</Text>
                        
                        <TextInput placeholder="silakan input catata"></TextInput>
                        
                    </View>

                    {/* RINCIAN PEMBAYARAN */}
                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Rincian Pembayaran</Text>
                        
                        <View style={{padding: 10, borderBottomColor: "green", borderBottomWidth: 0.5}}>
                            <CartDeskripsi deskripsi="Harga" biaya="Rp 11.000" />
                            <CartDeskripsi deskripsi="Diskon" biaya="Rp 0" />
                            <CartDeskripsi deskripsi="Admin" biaya="Rp 0" />
                            <CartDeskripsi deskripsi="Jasa Antar" biaya="Rp 0" />
                        </View>
                        
                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <Text style={{fontWeight: "bold", fontSize: 17}}>Total Pembayaran</Text>
                            <Text style={{fontWeight: "bold", fontSize: 17}}>Rp 11.000</Text>
                        </View>
                    </View>

                    {/* BUTTON PESAN SEKARANG */}
                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        
                        <TouchableOpacity style={{paddingVertical: 10, backgroundColor: "#ff7143", borderRadius: 5}}>
                            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 17, textAlign: "center"}}>Pesan Sekarang</Text>
                        </TouchableOpacity>
                        
                    </View>

                </View>

            </ScrollView>
        )
    }
}