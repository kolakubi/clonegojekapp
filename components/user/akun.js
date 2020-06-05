import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Avatar from '../../assets/user-avatar.jpg';
import globalStyles from '../utility/globalStyles';

export default class Akun extends Component{

    constructor(props){
        super(props);

        this.state = {
            nama: "Malmahsyar",
            email: "mal.mahsyar@gmail.com",
            noHp: "085611112222",
            tanggalLahir: "08/30/1990",
            kelamin: "Laki-laki"
        }
    }

    simpan = ()=>{
        alert('data disimpan')
    }

    selectPicker = (value) => {
        alert(value);
        this.setState({
            kelamin: value
        })
    }
    

    render(){
        return(
            <View style={{flex: 1}}>

                {/* HEADER */}
                <View>
                    {/* CONTAINER */}
                    <View style={{width: "100%", height: 60, flexDirection: "row", alignItems: "center", borderBottomColor: "grey", borderBottomWidth: 0.5, backgroundColor: globalStyles.mainColor}}>
                        {/* BUTTON BACK */}
                        <TouchableOpacity 
                            style={{marginLeft: 25, marginRight: 40}}
                            onPress={this.props.navigation.goBack}>
                            <Icon name="arrow-left" size={18} color="#fff" />
                        </TouchableOpacity>
                        {/* TITLE */}
                        <Text style={{color: "#fff", fontSize: 20, fontWeight: "bold"}}>Akun</Text>

                    </View>
                </View>


                {/* CONTENT */}
                <ScrollView style={{backgroundColor: "#fff"}}>
                <View style={{...globalStyles.container, justifyContent: "center", alignItems: "center"}}>
                    
                    {/* AVATAR */}
                    <View style={{alignItems: "center"}}>
                        <View style={{width: 130, height: 130, borderRadius: 65, overflow: "hidden", backgroundColor: "pink", alignItems: "center", justifyContent: "center", marginBottom: 15}}>
                            <Image source={Avatar} style={{resizeMode: "contain", maxWidth: "100%"}}  />
                        </View>
                        
                        {/* NAMA */}
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Mal</Text>
                    </View>


                    {/* FORM */}
                    <View style={{width: "90%"}}>

                        {/* NAMA */}
                        <Text style={{marginTop: 8, fontSize: 12, fontWeight: "bold"}}>Nama Lengkap</Text>
                        <TextInput placeholder="nama" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 8, paddingBottom: 8, fontSize: 14}} value={this.state.nama} />

                        {/* EMAIL */}
                        <Text style={{marginTop: 8, fontSize: 12, fontWeight: "bold"}}>Email</Text>
                        <TextInput placeholder="email" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 8, paddingBottom: 8, fontSize: 14}} value={this.state.email}/>

                        {/* NO HP */}
                        <Text style={{marginTop: 8, fontSize: 12, fontWeight: "bold"}}>Nomor Handphone</Text>
                        <TextInput placeholder="No Hp" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 8, paddingBottom: 8, fontSize: 14}} value={this.state.noHp}/>

                        {/* TGL LAHIR */}
                        <Text style={{marginTop: 8, fontSize: 12, fontWeight: "bold"}}>Tanggal Lahir</Text>
                        <TextInput placeholder="Password" style={{borderBottomWidth: 1, borderBottomColor: "#ff7143", color: "#000", paddingTop: 8, paddingBottom: 8, fontSize: 14}} value={this.state.tanggalLahir}/>

                        {/* KELAMIN */}
                        <Text style={{marginTop: 8, fontSize: 12, fontWeight: "bold"}}>Jenis Kelamin</Text>
                        <Picker
                            onValueChange={this.selectPicker}
                            selectedValue={this.state.kelamin}
                        >
                            <Picker.Item label="Laki-laki" value="laki-laki" />
                            <Picker.Item label="Perempuan" value="perempuan" />
                        </Picker>


                        {/* BUTTON DAFTAR */}
                        <TouchableOpacity style={{borderRadius:30, backgroundColor: "#ff7143", padding: 15, marginTop: 30}} onPress={this.simpan}>
                            <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Simpan</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                </ScrollView>

                

            </View>
            
        )
    }
}