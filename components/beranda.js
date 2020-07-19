import React from 'react';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {View, Text, Image, TouchableOpacity, ScrollView, Linking, AsyncStorage, ActivityIndicator, Button, Alert } from 'react-native';

import logoSembako from '../assets/logo-paketsembako-mini.png';
import GlobalStyles from './utility/globalStyles';

import { useFocusEffect } from '@react-navigation/native';

// REDUX
import {connect} from 'react-redux';
import actionTypes from '../redux/reducers/actionTypes';

// DUMMY PRODUK
import produkTelur from '../assets/produk/produk-telur.png';
import produkTepung from '../assets/produk/produk-tepung.png';
import produkMinyak from '../assets/produk/produk-minyak-goreng-vipco.png';

import ItemProduk from './itemProduk';
import ItemProdukLoading from './itemProdukLoading';

// SLIDER
import { SliderBox } from "react-native-image-slider-box";
import Banner1 from '../assets/banner-1.png';
import Banner2 from '../assets/banner-2.jpg';
import Banner3 from '../assets/banner-3.jpg';

class Beranda extends Component{

    constructor(props){
        super(props);

        this.state = {
            getProduct: [
                {
                    id_produk: "1", 
                    nama_produk: "Telur Ayam Kampung 6 Butir", 
                    harga: 10000, 
                    hargaDiskon: 0, 
                    gambar_produk: produkTelur,
                    deskripsi: "Tidak hanya lezat dan mudah dimasak, telur ayam ini memiliki kandungan protein yang dibutuhkan oleh tubuh. berat 618 - 630gr"
                },
                {
                    id_produk:'2', 
                    nama_produk:'Tepung Rose Brand 1kg', 
                    harga:20000, 
                    hargaDiskon: 15000, 
                    gambar_produk: produkTepung,
                    deskripsi: "Tepung beras Rose Brand cocok untuk membuat roti dengan hasil yang mengembang sempurna dan mempunyai tekstur lembut"
                },
                {
                    id_produk:'3', 
                    nama_produk:'Minyak Goreng Vipco 1lt', 
                    harga:30000, 
                    hargaDiskon: 0, 
                    gambar_produk: produkMinyak,
                    deskripsi: "Minyak goreng Vipco jernih dan hasil gorengan anda pasti gurih dan enak tersedia kemasan 1ltr dan 2ltr. Murah, sehat, dan enak"
                },

            ],
            banner: [
                Banner1,
                Banner2,
                Banner3
            ],
            isLoading: true
        }
    }

    getProductData = async ()=>{
        const key = JSON.parse(await AsyncStorage.getItem('user')).key;
        // const key= "";
        const ip = "192.168.0.19";

        try{
            const a = await fetch("http://"+ip+"/sembakoapi/api/products?ACCESS_TOKEN="+key);
            const b = await a.json();

            if(b){
                this.setState({
                    getProduct: b
                })
                // console.log(b);
            }
        }
        catch(err){
            console.log('ada kesalahan', err)
        }
    }

    getCartData = async () => {
        try{
            const a = JSON.parse(await AsyncStorage.getItem('cart'));

            if(a){
                // dispatch redux
                this.props.setCartData(a);
                // return a

                console.log('cart data available')
            }
            else{
                console.log('no cart data');
            }
        }
        catch(err){
            console.log('gagal ambil data cart, ', err)
        }
    }

    // react navigation function
    abc = () => {
        useFocusEffect(
            React.useCallback(() => {
                const unsubscribe = this.getCartData();
    
                return () => unsubscribe();
            }, [])
        );
    }

    async componentDidMount(){
        // if(this.props.cart.detailItem.length>0){
        //     // loading screen
        //     setTimeout(()=>{
        //         this.setState({
        //             ...this.state,
        //             getProduct: [
        //                 ...this.state.getProduct, 
        //                 this.props.cart.detailItem
        //             ]
        //             ,
        //             isLoading: false
        //         })
        //     }, 1500)
        // }
        // else{
        //     // loading screen
        //     setTimeout(()=>{
        //         this.setState({
        //             ...this.state,
        //             isLoading: false
        //         })
        //     }, 1500)
        // }
        setTimeout(()=>{
            this.setState({
                ...this.state,
                isLoading: false
            })
        }, 1500)
    }

    // Cek apakah item ada di Cart
    onCart = (produkId) => {
        for(let i=0;i<this.props.cart.detailItem.length; i++){
            if(this.props.cart.detailItem[i].id_produk == produkId){
                return this.props.cart.detailItem[i].jumlah;
            }
        }
        return 0;
    }

    navigationTo = (halaman) => {
        this.props.navigation.navigate(halaman);
    }

    openWhatsapp = () => {
        const phone = '628568734259';
        const text = 'Halo+admin+agen+sembako,+saya+ingin+pesan+sembako';
        Linking.openURL('https://api.whatsapp.com/send?phone='+phone+'&text='+text);
    }

    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.replace('login');
    }

    render(){
        // console.log(this.props);
        return(
            <View style={{backgroundColor: "#fafafa"}}>
                <ScrollView>
                    <View style={{alignItems: "center"}}>

                        {/* HEADER */}
                        <View style={{...GlobalStyles.shadowBox, width: "100%", height: 80, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomColor: "#eaeaea", borderBottomWidth: 0.5, backgroundColor: "#fff"}}>

                            {/* MENU */}
                            <TouchableOpacity 
                                style={{marginLeft: 15, height: 40, width: 40}}
                                onPress={this.props.navigation.openDrawer}>
                                <Entypo name="menu" size={30} color={GlobalStyles.mainColor} />
                            </TouchableOpacity>

                            {/* LOGO */}
                            <Image source={logoSembako} style={{resizeMode: "contain"}} />

                            {/* NOTIFIKASI */}
                            <TouchableOpacity 
                                style={{marginRight: 15, height: 25, width: 25, position: "relative"}}
                                onPress={()=>this.navigationTo('notifikasi')}>

                                <View style={{position: "absolute", right: -10, top: -10, width: 20, height: 20, backgroundColor: "red", zIndex: 2, alignItems: "center", justifyContent: "center", borderRadius: 10}}>
                                    <Text 
                                        style={{color: "#fff", fontSize: 12}}
                                        >0
                                    </Text>
                                </View>
                                
                                <Icon name="bell" size={25} color={GlobalStyles.mainColor} />
                            </TouchableOpacity>
                        </View>

                        {/* BANNER */}
                        <View style={{height: 195}}>
                            {/* <Image source={bannerUtama} style={{resizeMode: "contain", maxWidth: "100%"}}  /> */}
                            
                            <SliderBox 
                                images={this.state.banner} 
                                // sliderBoxHeight={195}
                                dotColor="#FFEE58"
                                inactiveDotColor="#90A4AE"
                                resizeMethod={'resize'}
                                resizeMode={'contain'}
                                // autoplay
                                circleLoop
                                ImageComponentStyle={{borderRadius: 10, width: "95%"}}
                            />
                            
                        </View>

                        {/* MIDDLE SECTION */}
                        <View 
                            style={{...GlobalStyles.shadowBox, width: "95%", marginTop: 10, borderWidth: 0.5, borderColor: "#fafafa", marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-around", backgroundColor: "#fff", padding: 10, borderRadius: 10}}>

                            {/* TRANSAKSI */}
                            <TouchableOpacity style={{alignItems:"center"}} onPress={()=>this.navigationTo('transaksi')}>
                                <Icon name="history" size={25} color={GlobalStyles.mainColor} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 12, textAlign: "center"}}>Transaksi</Text>
                            </TouchableOpacity>
                            
                            {/* REQUEST */}
                            <TouchableOpacity style={{alignItems:"center"}} onPress={()=>this.navigationTo('request')}>
                                <Icon name="list" size={25} color={GlobalStyles.mainColor} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 12, textAlign: "center"}}>Request</Text>
                            </TouchableOpacity>

                            {/* WHATSAPP  */}
                            <TouchableOpacity style={{alignItems:"center"}} onPress={this.openWhatsapp}>
                                <Icon name="whatsapp" size={25} color={GlobalStyles.mainColor} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 12, textAlign: "center"}}>Pesan</Text>
                            </TouchableOpacity>
                        </View>

                        {/* DEBUG CART SYSTEM */}
                        {/* {this.props.cart.detailItem ? 
                        this.props.cart.detailItem.map((item)=>(
                            <Text>{item.nama_produk}, jumlah {item.jumlah}</Text>
                        )) :
                            <View></View>
                        } */}

                        {/* PRODUK */}
                        {this.state.isLoading ?
                            // JIKA SEDANG LOADING
                            // AMBIL PRODUK
                            <View style={{width: "97%"}}>
                                <ItemProdukLoading />
                                <ItemProdukLoading />
                                <ItemProdukLoading />
                                <ItemProdukLoading />
                            </View>
                            :
                            // this.props.cart.detailItem.map((produk)=>(
                            //     <ItemProduk
                            //         key={produk.id_produk}
                            //         produk={produk}
                            //         navigation={this.props.navigation}
                            //         onCart={this.onCart(produk.id_produk)}
                            //     />
                            // )) 
                            // JIKA TIDAK LOAADING
                            this.state.getProduct.map((produk)=>(
                                <ItemProduk
                                    key={produk.id_produk}
                                    produk={produk}
                                    navigation={this.props.navigation}
                                    onCart={this.onCart(produk.id_produk)}
                                />
                            ))
                        }
                        
                        <View style={{height: 100}}></View>

                    </View>
                </ScrollView>

                {/* FLOAT BOTTOM CART */}
                <TouchableOpacity 
                    style={{height: 60, width: "100%", backgroundColor: GlobalStyles.mainColor, position: "absolute", bottom: 0, left: 0, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}} 
                    onPress={()=>this.navigationTo('cart')}>

                    {/* DETAIL CART */}
                    <View>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#fff"}}>{this.props.cart.jumlahItem} Items | Rp {this.props.cart.JumlahPembelian}</Text>
                    </View>
                    
                    {/* LOGO CART */}
                    <View style={{position: "relative"}}>
                        <View style={{position: "absolute", right: -10, top: -10, width: 20, height: 20, backgroundColor: "red", zIndex: 2, alignItems: "center", justifyContent: "center", borderRadius: 10}}>
                            <Text 
                                style={{color: "#fff", fontSize: 12}}
                                >{this.props.cart.jumlahItem}
                            </Text>
                        </View>
                        
                        <Icon name="shopping-cart" size={30} color="#fff" />
                    </View>
                </TouchableOpacity>

            </View>
            
        )
    }
}

const mapStateToProps = (state)=> {
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setCartData: (data) => dispatch({
            type: actionTypes.GET_CART,
            cartFromStorage: data
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Beranda)