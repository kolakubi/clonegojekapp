import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import GlobalStyle from './utility/globalStyles';

import NotifikasiItem from './notifikasiItem';

export default class Notifikasi extends Component{

    constructor(props){
        super(props);

        this.state={
            notif: [
                {
                    idNotif: "1",
                    judulNotif: "Keterlambatan Pengiriman",
                    isiNotif: "Mohon maaf dikarenakan wabah Covid-19, pengiriman akan terlambah 1-2 hari",
                    dibaca: false
                },
                {
                    idNotif: "2",
                    judulNotif: "Member Verification",
                    isiNotif: "Pendaftaran Berhasil, kode verivikasi telah dikirim ke email anda",
                    dibaca: true
                }
            ]
        }
    }

    render(){
        return(
            <View style={{...GlobalStyle.container, backgroundColor: "#fafafa"}}>


                {this.state.notif.map((val)=>(
                    <NotifikasiItem
                        key={val.idNotif}
                        judulNotif={val.judulNotif}
                        isiNotif={val.isiNotif}
                        dibaca={val.dibaca}
                    />
                ))}
                
        
            </View>
        )
    }
}