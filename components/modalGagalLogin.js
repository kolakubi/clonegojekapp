import React, {Component} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';

export default class ModalGagalLogin extends Component{
    render(){
        return(
            <Modal 
                transparent={true}
                visible={this.props.visible}
                animationType="fade"
            >
                <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#000000aa"}}>
                    <View 
                        style={{width: "90%", height: 300, backgroundColor: "#fff", borderRadius: 10, alignItems: "center", justifyContent: "center", alignSelf: "center"}}>
                        <Text style={{fontSize: 20}}>Oops!</Text>
                        <Text style={{marginBottom: 20, fontSize: 20}}>Username atau Password Salah</Text>
                        <TouchableOpacity 
                            onPress={this.props.tutupModal}
                            style={{borderRadius:20, backgroundColor: "#ff7143", padding: 10, width: "90%"}}>
                            <Text 
                                style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Coba Lagi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}