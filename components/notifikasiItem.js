import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native'

import GlobalStyle from './utility/globalStyles';

export default class NotifikasiItem extends Component{
    render(){
        return(

            <View>
                <TouchableOpacity 
                    style={{...GlobalStyle.shadowBox, justifyContent: "space-between", paddingVertical: 20, paddingHorizontal: 10, borderWidth: 0.5, borderColor: "#fafafa", marginBottom: 15, backgroundColor: "#fff"}}
                    onPress={this.navigateToTambahAlamat}>

                    <Text style={{color: "#000", fontSize: 14}}>{this.props.judulNotif}</Text>
                    <Text style={{color: "#9c9c9c"}}>{this.props.isiNotif}</Text>
                    {this.props.dibaca ? 
                        <Text style={{marginTop: 15}}>Dibaca</Text>
                        :
                        <Text style={{marginTop: 15, color: "green"}}>Belum dibaca</Text>
                    }
                    
                </TouchableOpacity>
            </View>
        )
    }
}