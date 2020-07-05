import React, {Component} from 'react';

import {View, Text, AsyncStorage} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AlamatSayaComp from './alamatSayaComp';

import GlobalStyle from './utility/globalStyles';

// REDUX
import {connect} from 'react-redux';

class AlamatSaya extends Component{

    constructor(props){
        super(props);

        this.state = {
            dataAlamat: [ 
                {
                    id_alamat: "1",
                    alamat: "Jl. Persahabatan VI no 3, RT.10/RW.08, Klp Dua Wetan, Kec Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13730, Indonesia",
                    nama_penerima: "Mal",
                    telpon_penerima: "085611112222"
                },
                {
                    id_alamat: "2",
                    alamat: "Jl. kampung baru no 9 RT 06/RW.09, ciracas",
                    nama_penerima: "Ryan",
                    telpon_penerima: "081233445555"
                },
            ]
        }
    }

    getAddressData = async ()=>{
        const key = JSON.parse(await AsyncStorage.getItem('user')).key;
        const id_user= JSON.parse(await AsyncStorage.getItem('user')).id_user;
        const ip = "192.168.0.19";
        try{
            const a = await fetch("http://"+ip+"/sembakoapi/api/addresses/?id="+id_user+"&ACCESS_TOKEN="+key);
            const b = await a.json();

            // JSON RESULT
            // ------------------------------------------------
            // {
            //     "alamat": "Jalan Kelapa dua wetan III no 29 RT 06/RW 01 Ciracas, Jakarta Timur",
            //     "id_alamat": "1", 
            //     "id_user": "1", 
            //     "nama_penerima": "Wisnu", 
            //     "patokan_alamat": "masuk dari kampus Iprija dekat musholla nurul amin",
            //     "telpon_penerima": "081211112222", 
            //     "tgl_input": "2020-06-13 21:33:19"
            // }

            if(b){
                if(b.status != false){
                    this.setState({
                        dataAlamat: b
                    })
                    console.log(b);
                }
            }
        }
        catch(err){
            console.log('ada kesalahan: ', err)
        }
    }

    async componentDidMount(){
        // await this.getAddressData();
    }

    dipilih = (alamatId) => {
        if(this.props.alamat.id_alamat == alamatId){
            return true;
        }
        return false;
    }

    navigateToTambahAlamat = () => {
        this.props.navigation.navigate('tambahAlamat');
    }

    render(){
        return(
            <View style={{...GlobalStyle.container}}>

                {this.state.dataAlamat.map((val)=>(
                    <AlamatSayaComp
                        key={val.id_alamat}
                        data={val}
                        dipilih={this.dipilih(val.id_alamat)}
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

const mapStateToProps = (state) => {
    return {
        alamat: state.alamat
    }
}

export default connect(mapStateToProps)(AlamatSaya)