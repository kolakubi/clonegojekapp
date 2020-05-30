import React from 'react';
import {Component} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';

export default class ItemProduk extends Component{
    render(){
        return(
            <View style={{height: 155, width: "95%", marginBottom: 10, padding: 15, borderBottomColor: "grey", borderBottomWidth: 0.5}}>

                <View style={{alignItems: "center", flexDirection: "row"}}>

                    {/* THUMBNAIL */}
                    <Image source={this.props.image} style={{marginRight: 15, width: 90, height: 90, resizeMode: "contain"}} />

                    {/* DESKRIPSI */}
                    <View>
                        <Text style={{color: "#000", fontSize: 14, fontWeight: "bold"}}>{this.props.judul}</Text>
                        <Text style={{fontSize: 14}}>{this.props.harga}</Text>
                        <Text style={{fontSize: 14, textDecorationLine:"line-through"}}>{this.props.harga}</Text>
                    </View>
                    
                </View>
                    
                {/* BUTTON TAMBAH */}
                <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}> 
                    <TouchableOpacity 
                        style={{backgroundColor: "#ff7143", width: 100, height: 35, alignItems: "center", justifyContent: "center", borderRadius: 8}}
                        onPress={this.props.tambah}
                    >
                        <Text style={{color: "white", fontWeight: "bold"}}>Tambah +</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}