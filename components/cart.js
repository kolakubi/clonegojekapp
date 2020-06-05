import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView, Image} from 'react-native';

import ItemProduk from './itemProduk';
import AlamatSaya from './alamatSaya';

import logoCod from '../assets/cod-logo.jpg';
import logoMaps from '../assets/icon/map-marker-icon-mini.png';

// DUMMY PRODUK
import produkTelur from '../assets/produk/produk-telur.png';
import produkTepung from '../assets/produk/produk-tepung.png';
import produkMinyak from '../assets/produk/produk-minyak-goreng-vipco.png';

import GlobalStyle from './utility/globalStyles';


import CartDeskripsi from './cartDeskripsi';

export default class Cart extends Component{

    constructor(props){
        super(props);

        this.state = {
            getProduct: [
                {id: "1", nama: "Telur Ayam Kampung 6 Butir", harga: 22000, image: produkTelur},
                {id:'2', nama:'Tepung Rose Brand 1kg', harga:17000, image: produkTepung},
                {id:'3', nama:'Minyak Goreng Vipco 1lt', harga:10500, image: produkMinyak}
            ],
            cart: {
                jumlahItem: 0,
                JumlahPembelian: 0,
                detailItem: []
            }
        }
    }

    updateItem = (data, index) => {
        this.setState({
            cart: {
                ...this.state.cart,
                jumlahItem: (this.state.cart.jumlahItem+= data.jumlah),
                JumlahPembelian: (this.state.cart.JumlahPembelian+=(data.harga*data.jumlah)),
                detailitem: this.state.cart.detailItem[index].jumlah += data.jumlah
            }
        });
        // console.log(this.state.cart);
    }

    pushItem = (data) => {
        this.setState({
            cart: {
                ...this.state.cart,
                jumlahItem: (this.state.cart.jumlahItem+=data.jumlah),
                JumlahPembelian: (this.state.cart.JumlahPembelian+=(data.harga*data.jumlah)),
                detailitem: this.state.cart.detailItem.push(data)
            }
        });
        //console.log(this.state.cart);
    }

    tambahItem = (data) => {

        const detailItem = this.state.cart.detailItem;

        if(detailItem.length > 0){
            // console.log('sdh ada item')
            // loop daftar cart
            for(let i=0; i<detailItem.length; i++){
                // jika item sdh masuk cart
                if(data.id == detailItem[i].id){
                    // console.log('item kembar')
                    // update
                    return this.updateItem(data, i);
                    break;
                }
            }
            return this.pushItem(data);
        }
        else{
            // console.log('belum ada item sama sekali')
            // push
            return this.pushItem(data);
        }
    }

    navigateToAlamatSaya = () => {

        console.log(this.props)
        this.props.navigation.navigate('alamatSaya');
        
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: "#fafafa"}}>
                <View style={{flex: 1, alignItems: "center", marginTop: 20}}>

                    {/* DIKIRIM */}
                    <View style={{...GlobalStyle.shadowBox, width: "95%", borderWidth: 0.5, borderColor: "#fafafa", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>

                        <Text 
                            style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10}}
                            >Dikirim</Text>
                        
                        <TouchableOpacity onPress={this.navigateToAlamatSaya}>
                            <View 
                                style={{paddingVertical: 10, flexDirection: "row", alignItems: "center"}} >
                                <Image source={logoMaps} style={{height: 40, width: 40, resizeMode:"contain"}} />
                                <Text style={{fontSize: 14}}>Pilih Alamat Pengiriman</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* PESANAN */}
                    <View style={{...GlobalStyle.shadowBox, width: "95%", borderWidth: 0.5, borderColor: "#fafafa", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Pesanan</Text>
                        
                        {this.state.getProduct.map((produk)=>(
                            <ItemProduk
                                produk={produk}
                                tambah={(counter)=>this.tambahItem({...produk, jumlah: counter})}
                            />
                        ))}
                    </View>

                    {/* PEMBAYARAN */}
                    <View style={{...GlobalStyle.shadowBox, width: "95%", borderWidth: 0.5, borderColor: "#fafafa", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Pembayaran</Text>
                        
                        <TouchableOpacity>
                            <Image source={logoCod} />
                        </TouchableOpacity>
                        
                    </View>

                    {/* CATATAN PEMBELI */}
                    <View style={{...GlobalStyle.shadowBox, width: "95%", borderWidth: 0.5, borderColor: "#fafafa", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Catatan Pembeli</Text>
                        
                        <TextInput placeholder="silakan input catata"></TextInput>
                        
                    </View>

                    {/* RINCIAN PEMBAYARAN */}
                    <View style={{...GlobalStyle.shadowBox, width: "95%", borderWidth: 0.5, borderColor: "#fafafa", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
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
                    <View style={{...GlobalStyle.shadowBox, width: "95%", borderWidth: 0.5, borderColor: "#fafafa", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        
                        <TouchableOpacity style={{paddingVertical: 10, backgroundColor: "#ff7143", borderRadius: 5}}>
                            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 17, textAlign: "center"}}>Pesan Sekarang</Text>
                        </TouchableOpacity>
                        
                    </View>

                </View>

            </ScrollView>
        )
    }
}