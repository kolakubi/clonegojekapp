import React, {Component} from 'react';

import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AlamatSayaComp from './alamatSayaComp';

import GlobalStyle from './utility/globalStyles';

export default class AlamatSaya extends Component{

    constructor(props){
        super(props);

        this.state = {
            dataAlamat: [ 
                {
                    alamatId: "1",
                    alamat: "Jl. Persahabatan VI no 3, RT.10/RW.08, Klp Dua Wetan, Kec Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13730, Indonesia",
                    user: "Mal",
                    noHp: "085611112222"
                },
                {
                    alamatId: "2",
                    alamat: "Jl. Kelapa Dua Wetan III no 29 RT.06/RW.01, Klp Dua Wetan, Kec Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13730, Indonesia",
                    user: "Mal",
                    noHp: "085633334444"
                }
            ]
        }
    }

    navigateToTambahAlamat = () => {
        this.props.navigation.navigate('tambahAlamat');
    }

    render(){
        return(
            <View style={{...GlobalStyle.container}}>

                {this.state.dataAlamat.map((val)=>(
                    <AlamatSayaComp
                        key={val.alamatId}
                        user={val.user}
                        alamat={val.alamat}
                        noHp={val.noHp}
                    />
                ))}

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