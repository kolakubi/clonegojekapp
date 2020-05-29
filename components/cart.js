import React, {Component} from 'react';

import {View, Text, TouchableOpacity, TextInput, ScrollView, Image} from 'react-native';

import ItemProduk from './itemProduk';
import logoCod from '../assets/cod-logo.jpg';
import CartDeskripsi from './cartDeskripsi';

export default class Cart extends Component{
    render(){
        return(
            <ScrollView>
                <View style={{flex: 1, alignItems: "center", backgroundColor: "#eaeaea"}}>

                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>

                        <Text style={{fontWeight: "bold", fontSize: 18, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10}}>Dikirim</Text>
                        
                        <TouchableOpacity>
                            <View style={{paddingVertical: 10, flexDirection: "row", alignItems: "center"}}>
                                <View style={{width: 40, height: 40, backgroundColor: "pink", marginRight: 10}}></View>
                                <Text style={{fontSize: 18}}>Pilih Alamat Pengiriman</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 18, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Pesanan</Text>
                        
                        <ItemProduk judul="Tepung Segitiga 1kg" harga="Rp 17.000" />
                    </View>

                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 18, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Pembayaran</Text>
                        
                        <TouchableOpacity>
                            <Image source={logoCod} />
                        </TouchableOpacity>
                        
                    </View>

                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 18, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Catatan Pembeli</Text>
                        
                        <TextInput placeholder="silakan input catata"></TextInput>
                        
                    </View>

                    <View style={{width: "95%", borderWidth: 0.5, borderColor: "grey", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 18, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Rincian Pembayaran</Text>
                        
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