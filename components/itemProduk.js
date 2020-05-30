import React from 'react';
import {Component} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';

export default class ItemProduk extends Component{
    render(){
        return(
            <View style={{height: 155, width: "95%", borderEndColor: "grey", borderWidth: 0.5, marginBottom: 25, borderRadius: 5, backgroundColor: "#fff"}}>

                <View style={{alignItems: "center", flexDirection: "row"}}>
                    <Image source={this.props.image} style={{width: 90, height: 90, resizeMode: "contain"}} />
                
                    <View>
                        <Text style={{color: "#000", fontSize: 16, fontWeight: "bold"}}>{this.props.judul}</Text>
                        <Text style={{fontSize: 16}}>{this.props.harga}</Text>
                        <Text style={{fontSize: 16, textDecorationLine:"line-through"}}>{this.props.harga}</Text>
                    </View>
                    
                </View>
                    

                <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}> 
                    <TouchableOpacity style={{backgroundColor: "#ff7143", width: 130, height: 44, alignItems: "center", justifyContent: "center", borderRadius: 8, marginRight: 10}}>
                        <Text style={{color: "white", fontWeight: "bold"}}>Tambah +</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}