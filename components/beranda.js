import React from 'react';
import {Component} from 'react';

import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import logoSembako from '../assets/logo-paketsembako-mini.png';
import bannerUtama from '../assets/banner-1.png';
import menuIcon from '../assets/icon/menu-icon.png';
import bellIcon from '../assets/icon/bell-icon.png';
import rekomendasiIcon from '../assets/icon/rekomendasi-icon.png';
import transaksiIcon from '../assets/icon/transaksi-icon.png';
import whatsappIcon from '../assets/icon/whatsapp-icon.png';

// DUMMY PRODUK
import produkTelur from '../assets/produk/produk-telur.png';
import produkTepung from '../assets/produk/produk-tepung.png';
import produkMinyak from '../assets/produk/produk-minyak-goreng-vipco.png';

import ItemProduk from './itemProduk';

export default class Beranda extends Component{

    cart = () => {
        this.props.navigation.navigate('cart');
    }

    render(){
        return(

            <View>
                <ScrollView>
                    <View style={{alignItems: "center"}}>

                        {/* HEADER */}
                        <View style={{width: "100%", height: 80, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomColor: "grey", borderBottomWidth: 0.5, backgroundColor: "#fff"}}>

                            <TouchableOpacity style={{marginLeft: 15, height: 40, width: 40}}>
                                <Image source={menuIcon} style={{resizeMode: "contain", width: "100%"}} />
                            </TouchableOpacity>

                            <Image source={logoSembako} style={{resizeMode: "contain"}} />

                            <TouchableOpacity style={{marginRight: 15, height: 40, width: 40}}>
                                <Image source={bellIcon} style={{resizeMode: "contain", width: "100%"}} />
                            </TouchableOpacity>
                        </View>

                        {/* BANNER */}
                        <View style={{height: 195, width: "95%"}}>
                            <Image source={bannerUtama} style={{resizeMode: "contain", maxWidth: "100%"}}  />
                        </View>

                        {/* MIDDLE SECTION */}
                        <View style={{width: "95%", marginTop: 10, borderWidth: 0.5, borderEndColor: "grey", height: 100, marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-around", backgroundColor: "#fff"}}>
                            <TouchableOpacity style={{alignItems:"center"}}>
                                <Image source={transaksiIcon} style={{resizeMode: "contain", width: "100%"}} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 16, textAlign: "center"}}>Transaksi</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:"center"}}>
                                <Image source={rekomendasiIcon} style={{resizeMode: "contain", width: "100%"}} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 16, textAlign: "center"}}>Rekomendasi</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:"center"}}>
                                <Image source={whatsappIcon} style={{resizeMode: "contain", width: "100%"}} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 16, textAlign: "center"}}>Pesan</Text>
                            </TouchableOpacity>
                        </View>

                        {/* PRODUK */}
                        <ItemProduk judul="Telur Ayam Kampung 6 Butir" harga="Rp 22.000" image={produkTelur} />
                        <ItemProduk judul="Tepung Rose Brand 1kg" harga="Rp 17.000" image={produkTepung} />
                        <ItemProduk judul="Minyak Goreng Vipco 1lt" harga="Rp 10.500" image={produkMinyak} />

                        

                        <View style={{height: 100}}></View>

                    </View>
                </ScrollView>

                <TouchableOpacity style={{height: 50, width: "100%", backgroundColor: "#ff7143", position: "absolute", bottom: 0, left: 0, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}} onPress={this.cart}>
                    <View>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#fff"}}>1 Items | Rp 11.000</Text>
                    </View>
                    
                    <View >
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#fff"}}>Cart</Text>
                    </View>
                </TouchableOpacity>

            </View>
            
        )
    }
}