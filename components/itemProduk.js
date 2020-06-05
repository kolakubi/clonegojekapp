import React from 'react';
import {Component} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import globalStyle from './utility/globalStyles';

export default class ItemProduk extends Component{

    constructor(props){
        super(props);

        this.state = {
            counter: 1
        }
    }

    componentDidMount(){
        //console.log(this.props)
    }

    tambahCounter = () => {
        this.setState({
          counter: this.state.counter += 1  
        })
    }

    kurangCounter = () => {
        if(this.state.counter > 1){
            this.setState({
                counter: this.state.counter -= 1
            })
        }
    }

    navigateToDetailProduk = () => {
        this.props.navigation.navigate('itemProdukDetail');
    }

    render(){
        return(
            <View style={{height: 155, width: "95%", marginBottom: 10, padding: 15, borderBottomColor: "#fafafa", borderBottomWidth: 0.5, backgroundColor: "#fff", ...globalStyle.shadowBox}}>

                <TouchableOpacity 
                    style={{alignItems: "center", flexDirection: "row"}}
                    onPress={this.navigateToDetailProduk}
                >

                    {/* THUMBNAIL */}
                    <Image source={this.props.produk.image} style={{marginRight: 15, width: 90, height: 90, resizeMode: "contain"}} />

                    {/* DESKRIPSI */}
                    <View>
                        <Text style={{color: "#000", fontSize: 14, fontWeight: "bold"}}>{this.props.produk.nama}</Text>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{fontSize: 14, marginRight: 20}}>{this.props.produk.harga}</Text>
                            <Text style={{fontSize: 14, textDecorationLine:"line-through"}}>{this.props.harga}</Text>
                        </View>
                        
                    </View>
                    
                </TouchableOpacity>
                    
                {/* BUTTON TAMBAH */}
                <View style={{flex: 1, alignItems: "center", justifyContent: "flex-end", flexDirection: "row"}}> 

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

                    {/* BUTTON ACC TO CART */}
                    <TouchableOpacity 
                        style={{backgroundColor: "#ff7143", width: 100, height: 35, alignItems: "center", justifyContent: "center", borderRadius: 8}}
                        onPress={()=>this.props.tambah(this.state.counter)}
                    >
                        <Text style={{color: "white", fontWeight: "bold"}}>Tambah +</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}