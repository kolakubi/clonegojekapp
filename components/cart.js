import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView, Image, AsyncStorage} from 'react-native';

import ItemProduk from './itemProduk';
import AlamatSaya from './alamatSaya';

import logoCod from '../assets/cod-logo.jpg';
import logoMaps from '../assets/icon/map-marker-icon-mini.png';

import GlobalStyle from './utility/globalStyles';
import CartDeskripsi from './cartDeskripsi';

// REDUX
import {connect} from 'react-redux';
import actionTypes from '../redux/reducers/actionTypes';

class Cart extends Component{

    constructor(props){
        super(props);

        this.state = {
            detailPembayaran: {
                totalHarga: 0,
                diskon: 0,
                biayaAdmin: 0,
                biayaAntar: 0,
                totalPembayaran: 0
            }
        }
    }

    onCart = (produkId) => {
        for(let i=0;i<this.props.cart.detailItem.length; i++){
            if(this.props.cart.detailItem[i].id_produk == produkId){
                return this.props.cart.detailItem[i].jumlah;
            }
        }
        return false;
    }

    navigateToAlamatSaya = () => {
        this.props.navigation.navigate('alamatSaya');
    }

    cekDataCheckout = () => {
        if(this.props.alamat.id_alamat
            && this.props.cart.detailItem.length > 0){
            
            return true;
        }

        return false;
    }

    submitCheckout = () => {
        if(this.cekDataCheckout()){
            alert("Checkout Berhasil");
        }
        else{
            alert('mohon lengkapi data');
        }
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: "#fafafa"}}>
                <View style={{flex: 1, alignItems: "center", marginTop: 20}}>

                    {/* DIKIRIM */}
                    <View style={{...GlobalStyle.shadowBox, width: "95%", borderWidth: 0.5, borderColor: "#fafafa", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>

                        <Text 
                            style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10}}
                            >Dikirim Ke:
                        </Text>
                        
                        {
                            this.props.alamat.id_alamat ?
                            // JIKA ALAMAT SUDAH DIPILIH
                            <View>
                                {/* DETAIL ALAMAT */}
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontWeight: "bold", fontSize: 16, color: "#000"}}>
                                        {this.props.alamat.alamat}
                                    </Text>
                                </View>

                                {/* NAMA & TELPON */}
                                <View style={{marginBottom: 10}}>
                                    <Text>
                                        {this.props.alamat.nama_penerima}
                                    </Text>
                                    <Text style={{color: GlobalStyle.mainColor, fontWeight: "bold"}}>
                                        {this.props.alamat.telpon_penerima}
                                    </Text>
                                </View>

                                <TouchableOpacity onPress={this.navigateToAlamatSaya}>
                                    <View 
                                        style={{paddingVertical: 10, flexDirection: "row", alignItems: "center"}} >
                                        <Image source={logoMaps} style={{height: 40, width: 40, resizeMode:"contain"}} />
                                        <Text style={{fontSize: 14}}>Ganti Alamat</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            :
                            // JIKA ALAMAT BELUM DIPILIH
                            <TouchableOpacity onPress={this.navigateToAlamatSaya}>
                                <View 
                                    style={{paddingVertical: 10, flexDirection: "row", alignItems: "center"}} >
                                    <Image source={logoMaps} style={{height: 40, width: 40, resizeMode:"contain"}} />
                                    <Text style={{fontSize: 14}}>Pilih Alamat Pengiriman</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        
                    </View>

                    {/* PESANAN */}
                    <View style={{...GlobalStyle.shadowBox, width: "95%", borderWidth: 0.5, borderColor: "#fafafa", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, borderBottomColor: "green", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 20}}>Pesanan</Text>
                        
                        {/* PRODUK */}
                        {
                            this.props.cart.detailItem.length > 0 ?
                            // JIKA CART TIDAK KOSONG
                            this.props.cart.detailItem.map((produk)=>(
                                <ItemProduk
                                    key={produk.id_produk}
                                    produk={produk}
                                    navigation={this.props.navigation}
                                    onCart={this.onCart(produk.id_produk)}
                                />
                            )) 
                            :
                            // JIKA CART KOSONG
                            <Text>Cart Kosong</Text>
                        }
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
                            <CartDeskripsi deskripsi="Harga" biaya={this.props.cart.JumlahPembelian} />
                            <CartDeskripsi deskripsi="Diskon" biaya={this.state.detailPembayaran.diskon} />
                            <CartDeskripsi deskripsi="Admin" biaya={this.state.detailPembayaran.biayaAdmin} />
                            <CartDeskripsi deskripsi="Jasa Antar" biaya={this.state.detailPembayaran.biayaAntar} />
                        </View>
                        
                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <Text style={{fontWeight: "bold", fontSize: 17}}>Total Pembayaran</Text>
                            <Text style={{fontWeight: "bold", fontSize: 17}}>Rp {this.props.cart.JumlahPembelian}</Text>
                        </View>
                    </View>

                    {/* BUTTON PESAN SEKARANG */}
                    <View style={{...GlobalStyle.shadowBox, width: "95%", borderWidth: 0.5, borderColor: "#fafafa", borderRadius: 5, padding: 20, marginBottom: 20, backgroundColor: "#fff"}}>
                        
                        <TouchableOpacity 
                            style={{paddingVertical: 10, backgroundColor: "#ff7143", borderRadius: 5}}
                            onPress={this.submitCheckout}
                        >
                            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 17, textAlign: "center"}}>Pesan Sekarang</Text>
                        </TouchableOpacity>
                        
                    </View>

                </View>

            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cart: state.cart,
        checkout: state.checkout,
        alamat: state.alamat
    }
}

export default connect(mapStateToProps)(Cart)