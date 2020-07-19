import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import globalStyles from './utility/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

// REDUX
import {connect} from 'react-redux';
import actionTypes from '../redux/reducers/actionTypes';

class itemProdukDetail extends Component{

    tambahKeKeranjang = () => {
        this.props.tambahCart({...this.props.route.params, jumlah: 1});

        this.props.navigation.navigate('cart');
    }

    componentDidMount(){
        //console.log(this.props)
    }

    render(){

        const produk = this.props.route.params;

        return(
            <View style={{...globalStyles.container, alignItems: "center", }}>

                {/* THUMBNAIL */}
                <Image 
                    source={produk.gambar_produk} 
                    style={{height: 270, width: 270, resizeMode: "contain"}} 
                />

                <View style={{width: "100%", padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    {/* NAMA PRODUK */}
                    <Text 
                        style={{fontSize: 16, fontWeight: "bold", color: "#000"}}>
                            {produk.nama_produk}
                    </Text>

                    {/* HARGA */}
                    <Text 
                        style={{fontSize: 16, fontWeight: "bold", color: globalStyles.mainColor}}>
                            Rp {produk.harga}
                    </Text>
                </View>

                {/* DESKRIPSI */}
                <Text 
                    style={{width: "90%", fontSize: 16, color: "#525252", marginTop: 20}}>
                        {produk.deskripsi}
                </Text>

                {/* BUTTON ADD TO CART */}
                <TouchableOpacity 
                    style={{borderRadius:30, backgroundColor: "#ff7143", padding: 15, marginTop: 30, width: "80%"}} 
                    onPress={this.tambahKeKeranjang}>
                        
                    <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Tambah ke Keranjang <Icon name="shopping-cart" size={18} color="#fff"></Icon></Text>
                </TouchableOpacity>
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
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(itemProdukDetail)