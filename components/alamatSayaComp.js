import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GlobalStyle from './utility/globalStyles';

export default class AlamatSayaComp extends Component{
    render(){
        return(
            <View style={{...GlobalStyle.shadowBox, padding: 15, marginBottom: 15}}>
                {/* ALAMAT */}
                <View style={{marginBottom: 10}}>
                <Text style={{fontWeight: "bold", fontSize: 16, color: "#000"}}>{this.props.alamat}</Text>
                </View>

                {/* NAMA & TELPON */}
                <View style={{marginBottom: 10}}>
                    <Text>{this.props.user}</Text>
                <Text style={{color: GlobalStyle.mainColor, fontWeight: "bold"}}>{this.props.noHp}</Text>
                </View>
                
                {/* BUTTON PILIH */}
                <View style={{justifyContent: "flex-end", flexDirection: "row"}}>

                    <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 15, borderWidth: 2, borderColor: GlobalStyle.mainColor, borderRadius: 10, marginRight: 10}}>
                        <Text style={{color: GlobalStyle.mainColor, fontSize: 14}}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 15, borderWidth: 2, borderColor: GlobalStyle.mainColor, borderRadius: 10}}>
                        <Text style={{color: GlobalStyle.mainColor, fontSize: 14}}>Pilih Alamat</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}