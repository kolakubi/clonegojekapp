import React from 'react';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import globalStyle from './utility/globalStyles';
import globalStyles from './utility/globalStyles';

//redux
import {connect} from 'react-redux';
import actionTypes from '../redux/reducers/actionTypes'

class ItemProduk extends Component{

    constructor(props){
        super(props);

        this.state = {
            onCart: false,
            counter: 0
        }
    }

    componentDidMount(){
        console.log("on cart = ", this.props.onCart)
        if(this.props.onCart){
            this.setState({
                onCart: true
            })
        }
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

        this.props.tambah(1);
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

        this.props.kurang(1);
    }

    firstAdd = () => {
        this.setState({
            ...this.state,
            onCart: true
        })
    }

    hapusItem = () => {
        this.setState({
            ...this.setState,
            counter: 0,
            onCart: false
        })
        this.props.hapus(this.props.produk.id_produk)
    }

    

    navigateToDetailProduk = () => {
        this.props.navigation.navigate('itemProdukDetail', this.props.produk);
    }

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
                                <Text style={{fontSize: 14, textDecorationLine:"line-through", marginRight: 10}}>{this.props.produk.hargaDiskon}</Text>
                            : <View></View>
                            }
                            <Text style={{fontSize: 14}}>{this.props.produk.harga}</Text>
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
                                onPress={this.hapusItem}
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
                                    onPress={this.kurangCounter}>
                                    <Text style={{color: "#fff"}}>-</Text>
                                </TouchableOpacity>

                                <Text style={{marginHorizontal: 15}}>{this.state.counter}</Text>

                                {/* TAMBAH */}
                                <TouchableOpacity 
                                    style={{height: 20, width: 20, backgroundColor: "#2e98f0", borderRadius: 10, alignItems: "center", justifyContent: "center"}}
                                    onPress={this.tambahCounter}>
                                    <Text style={{color: "#fff"}}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        : 
                        <TouchableOpacity 
                            style={{backgroundColor: globalStyles.mainColor, width: 100, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 8}}
                            // onPress={()=>this.props.tambah(this.state.counter)}
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

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tambahCounter: () => dispatch({type: actionTypes.ADD_COUNTER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemProduk)