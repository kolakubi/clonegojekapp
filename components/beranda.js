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

    constructor(props){
        super(props);

        this.state = {
            cart: {
                jumlahItem: 0,
                JumlahPembelian: 0,
                detailItem: []
            }
        }
    }

    tambahItem = (data) => {

        // filter item
        // jika item sdh ada update item array
        // jika belum ada, push item
        this.setState({
            cart: {
                ...this.state.cart,
                jumlahItem: (this.state.cart.jumlahItem+=1),
                JumlahPembelian: (this.state.cart.JumlahPembelian+=data[2]),
                detailitem: this.state.cart.detailItem.push(data)
            }

        });

        //console.log(this.state.cart);
    }

    navigationToCart = () => {
        this.props.navigation.navigate('cart');
    }

    render(){
        return(

            <View style={{backgroundColor: "#fff"}}>
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
                                <Image source={transaksiIcon} style={{resizeMode: "contain", width: "100%", width: 35, height: 35}} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 14, textAlign: "center"}}>Transaksi</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:"center"}}>
                                <Image source={rekomendasiIcon} style={{resizeMode: "contain", width: "100%", width: 35, height: 35}} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 14, textAlign: "center"}}>Rekomendasi</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:"center"}}>
                                <Image source={whatsappIcon} style={{resizeMode: "contain", width: "100%", width: 35, height: 35}} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 14, textAlign: "center"}}>Pesan</Text>
                            </TouchableOpacity>
                        </View>

                        {/* PRODUK */}
                        <ItemProduk
                            id="1"
                            judul="Telur Ayam Kampung 6 Butir" 
                            harga="Rp 22.000" 
                            image={produkTelur}
                            tambah={()=>this.tambahItem(['1', 'Telur Ayam Kampung 6 Butir', 22000])}
                        />

                        <ItemProduk
                            id="2"
                            judul="Tepung Rose Brand 1kg" 
                            harga="Rp 17.000" 
                            image={produkTepung} 
                            tambah={()=>this.tambahItem(['2', 'Tepung Rose Brand 1kg', 17000])}
                        />

                        <ItemProduk
                            id="3"
                            judul="Minyak Goreng Vipco 1lt" 
                            harga="Rp 10.500" 
                            image={produkMinyak} 
                            tambah={()=>this.tambahItem(['3', 'Minyak Goreng Vipco 1lt', 10500])}
                        />

                        

                        <View style={{height: 100}}></View>

                    </View>
                </ScrollView>

                {/* FLOAT BOTTOM CART */}
                <TouchableOpacity style={{height: 50, width: "100%", backgroundColor: "#ff7143", position: "absolute", bottom: 0, left: 0, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}} onPress={this.navigationToCart}>
                    <View>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#fff"}}>{this.state.cart.jumlahItem} Items | Rp {this.state.cart.JumlahPembelian}</Text>
                    </View>
                    
                    <View >
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#fff"}}>Cart</Text>
                    </View>
                </TouchableOpacity>

            </View>
            
        )
    }
}