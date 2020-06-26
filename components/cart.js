import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView, Image, AsyncStorage} from 'react-native';

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
            cart: {
                jumlahItem: 0,
                JumlahPembelian: 0,
                detailItem: []
            },
            detailPembayaran: {
                totalHarga: 0,
                diskon: 0,
                biayaAdmin: 0,
                biayaAntar: 0,
                totalPembayaran: 0
            }
        }
    }

    getCartData = async () => {
        try{
            const a = JSON.parse(await AsyncStorage.getItem('cart'));

            if(a){
                this.setState({
                    cart: a,
                    detailPembayaran: {
                        ...this.state.detailPembayaran,
                        totalHarga: a.JumlahPembelian,
                        totalPembayaran: a.JumlahPembelian
                            // (
                            // this.state.detailPembayaran.totalHarga +
                            // this.state.detailPembayaran.biayaAdmin +
                            // this.state.detailPembayaran.biayaAntar -
                            // this.state.detailPembayaran.diskon
                            // )
                    }
                })

                console.log('cart data available')
                console.log(this.state)
            }
            else{
                console.log('no cart data');
            }
        }
        catch(err){
            console.log('gagal ambil data cart, ', err)
        }
    }

    async componentDidMount(){
        // await this.getProductData();
        await this.getCartData();
    }

    saveCart = async () => {
        await AsyncStorage.setItem('cart', JSON.stringify(this.state.cart));
        console.log('cart saved')
    }

    // ===================================== START CHILD FUNCTION
    updateJumlahItem = (arr = null) => {
        let a = 0;
        if(arr){
            arr.forEach(item => {
                a += item.jumlah;
            });
        }
        else{
            this.state.cart.detailItem.forEach(item => {
                a += item.jumlah;
            });
        }
        
        return a;
    }

    updateJumlahPembelian = (arr = null) => {
        let b = 0;
        if(arr){
            arr.forEach(item => {
                b += (item.harga*item.jumlah);
            });
        }
        else{
            this.state.cart.detailItem.forEach(item => {
                b += (item.harga*item.jumlah);
            });
        }
        
        return b;
    }

    updateTambahItem = (data, index) => {
        this.setState({
            cart: {
                ...this.state.cart,
                detailitem: this.state.cart.detailItem[index].jumlah += data.jumlah,
                jumlahItem: this.updateJumlahItem(),
                JumlahPembelian: this.updateJumlahPembelian(),
            }
        });

        this.saveCart();
    }

    updateKurangItem = (data, index) => {
        this.setState({
            cart: {
                ...this.state.cart,
                detailitem: this.state.cart.detailItem[index].jumlah -= data.jumlah,
                jumlahItem: this.updateJumlahItem(),
                JumlahPembelian: this.updateJumlahPembelian(),
            }
        });

        if(this.state.cart.detailItem[index].jumlah < 1){
            this.hapusItem(data.id_produk);
        }

        this.saveCart();
    }

    pushItem = (data) => {
        this.setState({
            cart: {
                ...this.state.cart,
                detailitem: this.state.cart.detailItem.push(data),
                jumlahItem: this.updateJumlahItem(),
                JumlahPembelian: this.updateJumlahPembelian()
            }
        });

        this.saveCart();
    }

    filterItem = (data) => {

        const newArr = this.state.cart.detailItem.filter(item=> item.id_produk != data);
        const a = this.updateJumlahItem(newArr);
        const b = this.updateJumlahPembelian(newArr);
        
        this.setState({
            cart: {
                ...this.state.cart,
                detailItem: newArr,
                jumlahItem: a,
                JumlahPembelian: b 
            }
        })

        this.saveCart();
    }
    // ==================================== END OF CHILD FUNCTION

    tambahItem = (data) => {
        const detailItem = this.state.cart.detailItem;

        if(detailItem.length > 0){
            // console.log('sdh ada item')
            // loop daftar cart
            for(let i=0; i<detailItem.length; i++){
                // jika item sdh masuk cart
                if(data.id_produk == detailItem[i].id_produk){
                    // console.log('item kembar')
                    // update
                    return this.updateTambahItem(data, i);
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

    kurangItem = (data) => {
        const detailItem = this.state.cart.detailItem;

        if(detailItem.length > 0){
            // console.log('sdh ada item')
            // loop daftar cart
            for(let i=0; i<detailItem.length; i++){
                // jika item sdh masuk cart
                if(data.id_produk == detailItem[i].id_produk){
                    // console.log('item kembar')
                    // update
                    return this.updateKurangItem(data, i);
                    break;
                }
            }
        }
    }

    hapusItem = (produkId) => {
        this.filterItem(produkId);
    }

    navigateToAlamatSaya = () => {
        // console.log(this.props)
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
                        
                        {/* PRODUK */}
                        {this.state.cart.detailItem.map((produk)=>(
                            <ItemProduk
                                key={produk.id_produk}
                                produk={produk}
                                navigation={this.props.navigation}
                                tambah={(counter)=>this.tambahItem({...produk, jumlah: counter})}
                                kurang={(counter)=>this.kurangItem({...produk, jumlah: counter})}
                                hapus={(produkId)=>this.hapusItem(produkId)}
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
                            <CartDeskripsi deskripsi="Harga" biaya={this.state.detailPembayaran.totalHarga} />
                            <CartDeskripsi deskripsi="Diskon" biaya={this.state.detailPembayaran.diskon} />
                            <CartDeskripsi deskripsi="Admin" biaya={this.state.detailPembayaran.biayaAdmin} />
                            <CartDeskripsi deskripsi="Jasa Antar" biaya={this.state.detailPembayaran.biayaAntar} />
                        </View>
                        
                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <Text style={{fontWeight: "bold", fontSize: 17}}>Total Pembayaran</Text>
                            <Text style={{fontWeight: "bold", fontSize: 17}}>Rp {this.state.detailPembayaran.totalPembayaran}</Text>
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