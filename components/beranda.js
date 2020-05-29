import React from 'react';
import {Component} from 'react';

import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import logoSembako from '../assets/logo-paketsembako-mini.png';
import bannerUtama from '../assets/banner-1.png';
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

                        <View style={{width: "100%", height: 80, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomColor: "grey", borderBottomWidth: 0.5}}>

                            <TouchableOpacity style={{width: 60}}>
                                <Text style={{color: "#ff7143", fontWeight: "bold", fontSize: 20, textAlign: "center"}}>Menu</Text>
                            </TouchableOpacity>

                            <Image source={logoSembako} style={{width: 190}} />

                            <TouchableOpacity style={{width: 60}}>
                                <Text style={{color: "#ff7143", fontWeight: "bold", fontSize: 20, textAlign: "center"}}>Cart</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{height: 195, width: "95%"}}>
                            <Image source={bannerUtama} style={{maxHeight: "100%", maxWidth: "100%"}}  />
                        </View>

                        <View style={{width: "95%", marginTop: 10, borderWidth: 0.5, borderEndColor: "grey", height: 100, marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                            <TouchableOpacity style={{alignItems:"center"}}>
                                <View style={{width: 50, height: 50, backgroundColor: "pink"}}></View>
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 16, textAlign: "center"}}>Transaksi</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:"center"}}>
                                <View style={{width: 50, height: 50, backgroundColor: "pink"}}></View>
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 16, textAlign: "center"}}>Rekomendasi</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:"center"}}>
                                <View style={{width: 50, height: 50, backgroundColor: "pink"}}></View>
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 16, textAlign: "center"}}>Pesan</Text>
                            </TouchableOpacity>
                        </View>

                        <ItemProduk judul="Telur Ayam Kampung 6 Butir" harga="Rp 22.000" />
                        <ItemProduk judul="Tepung Rose Brand 1kg" harga="Rp 17.000" />
                        <ItemProduk judul="Beras Premium 5kg" harga="Rp 57.500" />

                        

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