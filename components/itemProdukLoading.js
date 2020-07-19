import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import globalStyle from './utility/globalStyles';

export default class ItemProdukLoading extends Component {

    render(){

        const componentColor = "#f0f1f3";
        const containerColor = "#fbfbfb";

        return(
            <View 
                style={{width: "95%", marginBottom: 10, paddingHorizontal: 15, paddingVertical: 10, borderBottomColor: "#fafafa", borderBottomWidth: 0.5, backgroundColor: "#fff", borderRadius: 10, ...globalStyle.shadowBox}}
            >
                <View style={{alignItems: "center", flexDirection: "row"}}>

                    {/* THUMBNAIL */}
                    <View style={{marginRight: 15, width: 90, height: 90, resizeMode: "contain", backgroundColor: componentColor}}></View>

                    {/* DESKRIPSI */}
                    <View style={{justifyContent: "center"}}>
                        <View style={{height: 20, width: 190, backgroundColor: componentColor, marginBottom: 20}}></View>

                        {/* HARGA */}
                        <View style={{height: 20, width: 90, backgroundColor: componentColor}}></View>
                    </View>
                </View>
                    
                <View style={{flex: 1, alignItems: "center", justifyContent: "flex-end", flexDirection: "row"}}> 
                    <View 
                        style={{backgroundColor: componentColor, width: 100, height: 30, borderRadius: 8}}
                    >
                    </View>
                </View>
            </View>
        )
    }
}