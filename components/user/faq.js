import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import globalStyles from '../utility/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';

export default class Faq extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: "#fafafa"}}>

                
                <ScrollView>
                    <View>
                        {/* HEADER */}
                        <View style={{width: "100%", height: 60, flexDirection: "row", alignItems: "center", borderBottomColor: "grey", borderBottomWidth: 0.5, backgroundColor: globalStyles.mainColor}}>

                            <TouchableOpacity 
                                style={{marginLeft: 25, marginRight: 40}}
                                onPress={this.props.navigation.goBack}>
                                <Icon name="arrow-left" size={18} color="#fff" />
                            </TouchableOpacity>

                            <Text style={{color: "#fff", fontSize: 20, fontWeight: "bold"}}>FAQ</Text>

                        </View>
                    </View>

                    {/* CONTENT */}
                    <View style={{...globalStyles.container, alignItems: "center", justifyContent: "center", backgroundColor: "transparent"}}>

                        <View style={{width: "90%"}}>

                            {/* TENTANG APP */}
                            <Text 
                            style={{textAlign: "center", fontSize: 24, fontWeight: "bold", textTransform: "uppercase", color: "#555965", marginBottom: -5}}>
                                Frequently
                            </Text>
                            <Text 
                            style={{textAlign: "center", fontSize: 24, fontWeight: "bold", textTransform: "uppercase", color: "#555965", marginBottom: 20}}>
                                Asked Question
                            </Text>
                            <Icon name="rocket" size={30} color={globalStyles.mainColor} style={{alignSelf: "center"}}/>

                            <Text style={{textAlign: "center", fontSize: 16, color: "#474b54", marginTop: 20}}>
                                Aplikasi untuk membantu para toko sembako memenuhi kebutuhan produk yang akan dijual
                            </Text>

                            {/* DROPDOWN */}
                            <TouchableOpacity style={{marginTop: 30, width: "100%", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 15, flexDirection: "row", borderLeftWidth: 2, backgroundColor: "#fff", borderLeftColor: globalStyles.mainColor}}>
                                <Text style={{width: "80%"}}>1. Bagaiamana Cara Melakukan Pemesanan?</Text>
                                <Icon name="plus" color={globalStyles.mainColor} size={20} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{marginTop: 30, width: "100%", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 15, flexDirection: "row", borderLeftWidth: 2, backgroundColor: "#fff", borderLeftColor: globalStyles.mainColor}}>
                                <Text style={{width: "80%"}}>2. Bagaiamana Cara Melakukan Pembayaran?</Text>
                                <Icon name="plus" color={globalStyles.mainColor} size={20} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{marginTop: 30, width: "100%", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 15, flexDirection: "row", borderLeftWidth: 2, backgroundColor: "#fff", borderLeftColor: globalStyles.mainColor}}>
                                <Text style={{width: "80%"}}>3. Bagaiamana Cara Melakukan Pengiriman?</Text>
                                <Icon name="plus" color={globalStyles.mainColor} size={20} />
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