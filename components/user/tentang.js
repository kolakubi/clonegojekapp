import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import globalStyles from '../utility/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';

export default class Tentang extends Component{
    render(){
        return(
            <View style={{flex: 1}}>

                
                <ScrollView>
                    <View>
                        {/* HEADER */}
                        <View style={{width: "100%", height: 60, flexDirection: "row", alignItems: "center", borderBottomColor: "grey", borderBottomWidth: 0.5, backgroundColor: globalStyles.mainColor}}>

                            <TouchableOpacity 
                                style={{marginLeft: 25, marginRight: 40}}
                                onPress={this.props.navigation.goBack}>
                                <Icon name="arrow-left" size={18} color="#fff" />
                            </TouchableOpacity>

                            <Text style={{color: "#fff", fontSize: 20, fontWeight: "bold"}}>Tentang</Text>

                        </View>
                    </View>

                    {/* CONTENT */}
                    <View style={{...globalStyles.container, alignItems: "center", justifyContent: "center", backgroundColor: "#f6f7fb"}}>

                        <View style={{width: "90%"}}>

                            {/* TENTANG APP */}
                            <Text 
                            style={{textAlign: "center", fontSize: 24, fontWeight: "bold", textTransform: "uppercase", color: "#555965", marginBottom: 20}}>
                                Tentang App PaketSembako
                            </Text>
                            <Icon name="rocket" size={30} color={globalStyles.mainColor} style={{alignSelf: "center"}}/>

                            <Text style={{textAlign: "center", fontSize: 16, color: "#474b54", marginTop: 20}}>
                                Aplikasi untuk membantu para toko sembako memenuhi kebutuhan produk yang akan dijual
                            </Text>

                            {/* EKSPLORASI  */}
                            <Text 
                            style={{textAlign: "center", fontSize: 22, fontWeight: "bold", color: "#555965", marginBottom: 20, marginTop: 40}}>
                                Eksplorasi Aplikasi Kami
                            </Text>
                            <Text style={{textAlign: "center", fontSize: 16, color: "#474b54", marginTop: 10, marginBottom: 20}}>
                                PaketSembako adalah layanan online yang menyediakan kebutuhan sembako tanpa harus keluar rumah. Kami berkomitmen untuk membantu toko sembako untuk memenuhi supply produk sembakonya tanpa dibebankan biaya kirim. Sementara ini layanan kami baru mencakup radius 30Km dari kecamatan Ciracas, Jakarta Timur.
                            </Text>

                            {/* TERSEDIA DI */}
                            <TouchableOpacity style={{borderWidth: 2, borderColor: globalStyles.mainColor, borderRadius: 35, height: 70, width: "50%", alignSelf: "center", flexDirection: "row", overflow: "hidden"}}>
                                <View style={{width: "30%", height: "100%", alignItems: "flex-end", justifyContent: "center"}}>
                                    <Icon name="android" size={40} color="#2b313f" />
                                </View>

                                <View style={{width: "70%", height: "100%", justifyContent: "center", color: "#4f535f", padding: 10}}>
                                    <Text>tersedia di</Text>
                                    <Text style={{fontWeight: "bold", fontSize: 17, color: "#4f535f", marginTop: -5}}>Play Store</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </ScrollView>

                {/* FOOTER */}
                <View style={{backgroundColor: "#2a323f", width: "100%", height: 50, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color: "white", fontSize: 12}}>Copyright @2020 <Text style={{color: globalStyles.mainColor}}>PaketSembako</Text>. All right reserved</Text>
                    </View>

            </View>
        )
    }
}