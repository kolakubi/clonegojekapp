import React from 'react';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {View, Text, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';

import logoSembako from '../assets/logo-paketsembako-mini.png';
import bannerUtama from '../assets/banner-1.png';

import GlobalStyles from './utility/globalStyles';

// DUMMY PRODUK
import produkTelur from '../assets/produk/produk-telur.png';
import produkTepung from '../assets/produk/produk-tepung.png';
import produkMinyak from '../assets/produk/produk-minyak-goreng-vipco.png';

import ItemProduk from './itemProduk';

export default class Beranda extends Component{

    constructor(props){
        super(props);

        this.state = {
            getProduct: [
                {id: "1", nama: "Telur Ayam Kampung 6 Butir", harga: 22000, image: produkTelur},
                {id:'2', nama:'Tepung Rose Brand 1kg', harga:17000, image: produkTepung},
                {id:'3', nama:'Minyak Goreng Vipco 1lt', harga:10500, image: produkMinyak},

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

    navigationTo = (halaman) => {
        this.props.navigation.navigate(halaman);
    }

    openWhatsapp = () => {
        const phone = '628568734259';
        const text = 'Halo+admin+agen+sembako,+saya+ingin+pesan+sembako';
        Linking.openURL('https://api.whatsapp.com/send?phone='+phone+'&text='+text);
    }

    render(){
        return(

            <View style={{backgroundColor: "#fafafa"}}>
                <ScrollView>
                    <View style={{alignItems: "center"}}>

                        {/* HEADER */}
                        <View style={{width: "100%", height: 80, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomColor: "#eaeaea", borderBottomWidth: 0.5, backgroundColor: "#fff"}}>

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
                                        >{this.state.cart.jumlahItem}
                                    </Text>
                                </View>
                                
                                <Icon name="bell" size={25} color={GlobalStyles.mainColor} />
                            </TouchableOpacity>
                        </View>

                        {/* BANNER */}
                        <View style={{height: 195, width: "95%"}}>
                            <Image source={bannerUtama} style={{resizeMode: "contain", maxWidth: "100%"}}  />
                        </View>

                        {/* MIDDLE SECTION */}
                        <View style={{width: "95%", marginTop: 10, borderWidth: 0.5, borderColor: "#fafafa", height: 100, marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-around", backgroundColor: "#fff"}}>

                            {/* TRANSAKSI */}
                            <TouchableOpacity style={{alignItems:"center"}} onPress={()=>this.navigationTo('transaksi')}>
                                <Icon name="history" size={30} color={GlobalStyles.mainColor} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 14, textAlign: "center"}}>Transaksi</Text>
                            </TouchableOpacity>
                            
                            {/* REQUEST */}
                            <TouchableOpacity style={{alignItems:"center"}} onPress={()=>this.navigationTo('request')}>
                                <Icon name="list" size={30} color={GlobalStyles.mainColor} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 14, textAlign: "center"}}>Request</Text>
                            </TouchableOpacity>

                            {/* WHATSAPP  */}
                            <TouchableOpacity style={{alignItems:"center"}} onPress={this.openWhatsapp}>
                                <Icon name="whatsapp" size={30} color={GlobalStyles.mainColor} />
                                <Text style={{color: "#000", fontWeight: "bold", fontSize: 14, textAlign: "center"}}>Pesan</Text>
                            </TouchableOpacity>
                        </View>

                        {/* PRODUK */}
                        {this.state.getProduct.map((produk)=>(
                            <ItemProduk
                                key={produk.id}
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