import React, {Component} from 'react';

import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import GlobalStyle from './utility/globalStyles';

export default class AlamatSaya extends Component{

    navigateToTambahAlamat = () => {
        this.props.navigation.navigate('tambahAlamat');
    }

    render(){
        return(
            <View style={GlobalStyle.container}>

                {/* Tambah Alamat Baru */}
                <TouchableOpacity 
                    style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 20, paddingHorizontal: 10, borderWidth: 0.5, borderColor: "#eaeaea"}}
                    onPress={this.navigateToTambahAlamat}>

                    <Text style={{fontSize: 14, color: GlobalStyle.mainColor}}>Tambah Alamat baru</Text>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "blue"}}>+</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}