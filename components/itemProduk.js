import React from 'react';
import {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

export default class ItemProduk extends Component{
    render(){
        return(
            <View style={{height: 155, width: "95%", borderEndColor: "grey", borderWidth: 0.5, marginBottom: 25, borderRadius: 5}}>

                <View style={{alignItems: "center", flexDirection: "row"}}>
                    <View style={{width: 100, height: 100, backgroundColor: "pink"}}></View>

                    <View>
                <Text style={{color: "#000", fontSize: 16, fontWeight: "bold"}}>{this.props.judul}</Text>
                <Text style={{fontSize: 16}}>{this.props.harga}</Text>
                    </View>
                </View>

                <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}> 
                    <TouchableOpacity style={{backgroundColor: "#ff7143", width: 130, height: 44, alignItems: "center", justifyContent: "center", borderRadius: 8}}>
                        <Text style={{color: "white", fontWeight: "bold"}}>Tambah +</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}