import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView} from 'react-native';

import GlobalStyle from './utility/globalStyles';

import ImageMaps from '../assets/maps-screenshoot.jpg';

import {GoogleAutoComplete} from 'react-native-google-autocomplete';
const API_KEYS = "AIzaSyD33T5gzUPZ9VBUudLSItOmgKUt5cmkSZk";
import LocationItem from './locationItem'

export default class TambahAlamat extends Component{

    constructor(props){
        super(props);

        this.state= {
            address: ""
        }
    }

    tambahAlamat = () => {
        alert('alamat ditambahkan');
    }

    render(){
        return(
            <ScrollView>

                <View style={{...GlobalStyle.container, justifyContent: "center"}}>

                    {/* ALAMAT LENGKAP */}
                    <Text style={{fontSize: 16, color: "#000"}}>Alamat Lengkap</Text>
                    <GoogleAutoComplete 
                        apiKey={API_KEYS}
                        debounce={500}
                        minLength={7}
                        radius={"3000"}
                        components="country:id"
                    >
                        {({ handleTextChange, locationResults, isSearching })=>(
                            <React.Fragment>
                                {console.log('locationResults', locationResults)}
                                <View>
                                    <TextInput 
                                        value={this.props.value}
                                        placeholder="ketik alamat" 
                                        onChangeText={handleTextChange}
                                    />
                                </View>
                                {isSearching && <ActivityIndicator size="large" color="red" />}
                                <ScrollView>
                                    {locationResults.map((data)=>(
                                        <LocationItem 
                                        {...data}
                                        key={data.id}
                                        data={data} />
                                    ))}
                                </ScrollView>
                            </React.Fragment>
                        )}
                    </GoogleAutoComplete>

                    {/* NAMA PENERIMA */}
                    <Text style={{fontSize: 16, color: "#000"}}>Nama Penerima</Text>
                    <TextInput placeholder="ketik nama" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 10, paddingBottom: 10, marginBottom: 10}} />

                    {/* NOMOR HANDPHONE */}
                    <Text style={{fontSize: 16, color: "#000"}}>Nomor Handphone</Text>
                    <TextInput placeholder="contoh: 08120001111" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 10, paddingBottom: 10, marginBottom: 10}} />

                    {/* GOOGLE MAPS */}
                    <Text style={{fontSize: 16, color: "#000", marginBottom: 5}}>Koordinat Lokasi</Text>
                    <View style={{width: "100%", height: 210, marginBottom: 10, alignItems: "center", justifyContent: "center"}}>
                        <Image 
                            source={ImageMaps}
                            style={{resizeMode: "contain", height: "100%"}} />
                    </View>

                    {/* BUTTON TAMBAH */}
                    <TouchableOpacity style={{borderRadius:30, backgroundColor: "#ff7143", padding: 15, marginTop: 30}} onPress={this.tambahAlamat}>
                        <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Tambah Alamat</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        )
    }
}