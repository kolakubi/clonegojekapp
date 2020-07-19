import React from 'react';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {View, Text, TouchableOpacity, Image, AsyncStorage, Alert} from 'react-native';
import globalStyle from './utility/globalStyles';

//redux
import {connect} from 'react-redux';
import actionTypes from '../redux/reducers/actionTypes';

class ItemProduk extends Component{

    constructor(props){
        super(props);

        this.state = {
            onCart: false,
            counter: 0
        }
    }

    componentDidMount(){
        console.log(this.props.onCart)
        if(this.props.onCart){
            this.setState({
                ...this.state,
                onCart: true,
                counter: this.props.onCart
            })
        }
    }

    saveCart = async () => {
        await AsyncStorage.setItem('cart', JSON.stringify(this.props.cart));
        console.log('cart saved')
    }

    tambahCounter = () => {
        if(this.state.counter == 0){
            this.setState({
                ...this.state,
                onCart: true,
                counter: this.state.counter+= 1
            })
        }
        else{
            this.setState({
                counter: this.state.counter += 1  
            })
        }
        //redux
        this.props.tambahCart({...this.props.produk, jumlah: this.state.counter})
        this.saveCart();
    }

    kurangCounter = () => {
        if(this.state.counter > 1){
            this.setState({
                counter: this.state.counter -= 1
            })
        }
        else{
            this.setState({
                counter: this.state.counter -= 1,
                onCart: false
            })
        }
        //redux
        this.props.kurangCart({...this.props.produk, jumlah: this.state.counter})
        this.saveCart();
    }

    hapusItem = () => {
        this.setState({
            ...this.setState,
            counter: 0,
            onCart: false
        })

        //redux
        this.props.hapusCart(this.props.produk)
        this.saveCart();
    }

    navigateToDetailProduk = () => {
        this.props.navigation.navigate('itemProdukDetail', this.props.produk);
    }

    hapusItemNotif = () =>
        Alert.alert(
            "Hapus Item",
            "Yakin ingin menghapus item ini?",
            [
                {   
                    text: "Ya", onPress: () => this.hapusItem() 
                },
                {
                    text: "Tidak",
                    // onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
            ],
            { cancelable: false }
        );


    render(){
        return(
            <View 
                style={{width: "95%", marginBottom: 10, paddingHorizontal: 15, paddingVertical: 10, borderBottomColor: "#fafafa", borderBottomWidth: 0.5, backgroundColor: "#fff", borderRadius: 10, ...globalStyle.shadowBox}}
            >

                <TouchableOpacity 
                    style={{alignItems: "center", flexDirection: "row"}}
                    onPress={this.navigateToDetailProduk}
                >

                    {/* THUMBNAIL */}
                    <Image source={this.props.produk.gambar_produk} style={{marginRight: 15, width: 90, height: 90, resizeMode: "contain"}} />

                    {/* DESKRIPSI */}
                    <View>
                        <Text style={{color: "#000", fontSize: 14, fontWeight: "bold"}}>{this.props.produk.nama_produk}</Text>

                        {/* HARGA */}
                        <View style={{flexDirection: "row"}}>
                            {this.props.produk.hargaDiskon ? 
                                <Text style={{fontSize: 14, textDecorationLine:"line-through", marginRight: 10}}>
                                    Rp {this.props.produk.hargaDiskon}
                                </Text>
                            : <View></View>
                            }
                            <Text style={{fontSize: 14}}>
                                Rp {this.props.produk.harga}
                            </Text>
                        </View>
                    </View>

                </TouchableOpacity>
                    
                {/* BUTTON ACTION */}
                <View style={{flex: 1, alignItems: "center", justifyContent: "flex-end", flexDirection: "row"}}> 
                    
                    {/* BUTTON ACC TO CART */}
                    {this.state.onCart 
                        ? 
                        /* HAPUS DARI CART */
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity 
                                style={{marginRight: 20}}
                                onPress={this.hapusItemNotif}
                            >
                                <Icon
                                    name="trash"
                                    size={20}
                                    color="grey"
                                />
                            </TouchableOpacity>

                            {/* COUNTER */}
                            <View style={{flexDirection: "row", marginRight: 20}}>

                                {/* KURANG */}
                                <TouchableOpacity 
                                    style={{height: 20, width: 20, backgroundColor: "#2e98f0", borderRadius: 10, alignItems: "center", justifyContent: "center"}}
                                    onPress={this.kurangCounter}
                                >
                                    <Text style={{color: "#fff"}}>-</Text>
                                </TouchableOpacity>

                                <Text style={{marginHorizontal: 15}}>{this.state.counter}</Text>

                                {/* TAMBAH */}
                                <TouchableOpacity 
                                    style={{height: 20, width: 20, backgroundColor: "#2e98f0", borderRadius: 10, alignItems: "center", justifyContent: "center"}}
                                    onPress={this.tambahCounter}
                                >
                                    <Text style={{color: "#fff"}}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        : 
                        <TouchableOpacity 
                            style={{backgroundColor: globalStyle.mainColor, width: 100, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 8}}
                            onPress={this.tambahCounter}
                        >
                            <Text style={{color: "white", fontWeight: "bold"}}>Tambah +</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
}

// REDUX
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tambahCart: (data) => dispatch({
            type: actionTypes.ADD_CART,
            dataProduk: data
        }),
        kurangCart: (data) => dispatch({
            type: actionTypes.DELETE_CART,
            dataProduk: data
        }),
        hapusCart: (data) => dispatch({
            type: actionTypes.TRASH_CART,
            dataProduk: data
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemProduk)