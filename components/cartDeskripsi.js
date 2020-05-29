import React from 'react';
import {Component} from 'react';

import {View, Text} from 'react-native';


export default class CartDeskripsi extends Component{
    render(){
        return(
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Text>{this.props.deskripsi}</Text>
        <Text style={{fontWeight: "bold", fontSize: 16}}>{this.props.biaya}</Text>
            </View>
        )
    }
}