import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, Button} from 'react-native';

import GlobalStyle from './utility/globalStyles';

import ImageMaps from '../assets/maps-screenshoot.jpg';

import {GoogleAutoComplete} from 'react-native-google-autocomplete';
const API_KEYS = "AIzaSyD33T5gzUPZ9VBUudLSItOmgKUt5cmkSZkxxxs";
import LocationItem from './locationItem'

export default class TambahAlamat extends Component{

    constructor(props){
        super(props);

        this.state= {
            address: "",
            locationMaps: []
        }
    }

    tambahAlamat = () => {
        alert('alamat ditambahkan');
    }

    handleClick = async () => {

    }

    setAlamat = (address)=>{
        this.setState(
            {address}
        )
        // console.log(this.state.address);
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: "#fff"}}>

                <View style={{...GlobalStyle.container, justifyContent: "center", backgroundColor: "#fff", flex: 1}}>

                    {/* ALAMAT LENGKAP */}
                    <Text style={{fontSize: 16, color: "#000"}}>Alamat Lengkap</Text>
                    <GoogleAutoComplete 
                        apiKey={API_KEYS}
                        debounce={1000}
                        minLength={7}
                        radius={"4000"}
                        components="country:id"
                        queryTypes="geocode|establishment"
                    >
                        {({ 
                            handleTextChange, 
                            locationResults, 
                            isSearching, 
                            fetchDetails,
                            // clearSearchs
                        })=>(
                            <React.Fragment>
                                {console.log('locationResults', locationResults)}
                                <View>
                                    <TextInput 
                                        value={this.state.address}
                                        placeholder="ketik alamat" 
                                        onChangeText={(val)=>{
                                            this.setAlamat(val); 
                                            handleTextChange(val)}}
                                        style={{borderBottomColor: GlobalStyle.mainColor, borderBottomWidth: 1, marginBottom: 20}}
                                    />
                                    {/* <Button title="hapus" onPress={clearSearchs} /> */}
                                </View>
                                {isSearching && <ActivityIndicator size="large" color={GlobalStyle.mainColor} />}
                                <ScrollView>
                                    {locationResults.map((data)=>(
                                        <LocationItem 
                                            {...data}
                                            key={data.id}
                                            data={data}
                                            fetchDetails={fetchDetails}
                                            // setAddress={(address)=>this.setAlamat(address)}
                                        />
                                    ))}
                                </ScrollView>
                            </React.Fragment>
                        )}
                    </GoogleAutoComplete>

                    {/* NAMA PENERIMA */}
                    <Text style={{fontSize: 16, color: "#000"}}>Nama Penerima</Text>
                    <TextInput placeholder="ketik nama" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 10, paddingBottom: 10, marginBottom: 20}} />

                    {/* NOMOR HANDPHONE */}
                    <Text style={{fontSize: 16, color: "#000"}}>Nomor Handphone</Text>
                    <TextInput placeholder="contoh: 08120001111" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 10, paddingBottom: 10, marginBottom: 20}} />

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