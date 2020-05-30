import React from 'react';
import {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class Daftar extends Component{

    daftar = () => {
        alert('daftar');
    }

    render(){
        return(
            <View style={{flex:1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", padding: 15}}>
                {/* <View>
                    <TouchableOpacity style={{padding: 15, width: 100}}>
                        <Text style={{color: "#ff7143", fontWeight: "bold", fontSize: 20}}>Back</Text>
                    </TouchableOpacity>
                </View> */}

                <View>

                    {/* JUDUL */}
                    <Text style={{color: "#ff7143", fontSize: 30, fontWeight: "bold", marginTop: 10}}>Daftar Akun Anda</Text>
                    <Text style={{color: "#ff7143", fontSize: 16, fontWeight: "bold", marginBottom: 20}}>Penuhi Segala Kebutuhan Kamu Disini</Text>

                    {/* FORM */}
                    <TextInput placeholder="nama" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 20, paddingBottom: 20}} />
                    <TextInput placeholder="email" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 20, paddingBottom: 20}} />
                    <TextInput placeholder="No Hp" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 20, paddingBottom: 20}} />
                    <TextInput placeholder="Password" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 20, paddingBottom: 20}} />
                    <TextInput placeholder="Ulangi Password" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 20, paddingBottom: 20}} />

                    {/* BUTTON DAFTAR */}
                    <TouchableOpacity style={{borderRadius:30, backgroundColor: "#ff7143", padding: 15, marginTop: 30}} onPress={this.daftar}>
                        <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Daftar</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        )
    }
}