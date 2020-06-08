import React from 'react';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {View, Text, Image, TouchableOpacity, ScrollView, Linking, AsyncStorage, ActivityIndicator } from 'react-native';

import logoSembako from '../assets/logo-paketsembako-mini.png';
import GlobalStyles from './utility/globalStyles';

// DUMMY PRODUK
import produkTelur from '../assets/produk/produk-telur.png';
import produkTepung from '../assets/produk/produk-tepung.png';
import produkMinyak from '../assets/produk/produk-minyak-goreng-vipco.png';

import ItemProduk from './itemProduk';

// SLIDER
import { SliderBox } from "react-native-image-slider-box";
import Banner1 from '../assets/banner-1.png';
import Banner2 from '../assets/banner-2.jpg';
import Banner3 from '../assets/banner-3.jpg';

export default class Beranda extends Component{

    constructor(props){
        super(props);

        this.state = {
            getProduct: [
                // {id_produk: "1", nama_produk: "Telur Ayam Kampung 6 Butir", harga: 22000, hargaDiskon: 0, gambar_produk: produkTelur},
                // {id_produk:'2', nama_produk:'Tepung Rose Brand 1kg', harga:17000, hargaDiskon: 15000, gambar_produk: produkTepung},
                // {id_produk:'3', nama_produk:'Minyak Goreng Vipco 1lt', harga:10500, hargaDiskon: 0, gambar_produk: produkMinyak},

            ],
            cart: {
                jumlahItem: 0,
                JumlahPembelian: 0,
                detailItem: []
            },
            banner: [
                Banner1,
                Banner2,
                Banner3
            ]
        }
    }

    async componentDidMount(){
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
            }

            console.log(b);
        }
        catch(err){
            console.log('ada kesalahan')
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

                        {/* PRODUK */}
                        {this.state.getProduct.map((produk)=>(
                            <ItemProduk
                                key={produk.id_produk}
                                produk={produk}
                                navigation={this.props.navigation}
                                tambah={(counter)=>this.tambahItem({...produk, jumlah: counter})}
                            />
                        ))}
                        
                        <View style={{height: 100}}></View>

                    </View>
                </ScrollView>

                {/* FLOAT BOTTOM CART */}
                <TouchableOpacity 
                    style={{height: 60, width: "100%", backgroundColor: GlobalStyles.mainColor, position: "absolute", bottom: 0, left: 0, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}} 
                    onPress={()=>this.navigationTo('cart')}>

                    {/* DETAIL CART */}
                    <View>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#fff"}}>{this.state.cart.jumlahItem} Items | Rp {this.state.cart.JumlahPembelian}</Text>
                    </View>
                    
                    {/* LOGO CART */}
                    <View style={{position: "relative"}}>
                        <View style={{position: "absolute", right: -10, top: -10, width: 20, height: 20, backgroundColor: "red", zIndex: 2, alignItems: "center", justifyContent: "center", borderRadius: 10}}>
                            <Text 
                                style={{color: "#fff", fontSize: 12}}
                                >{this.state.cart.jumlahItem}
                            </Text>
                        </View>
                        
                        <Icon name="shopping-cart" size={30} color="#fff" />
                    </View>
                </TouchableOpacity>

            </View>
            
        )
    }
}