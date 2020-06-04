import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native'

export default class LocationItem extends Component{

    render(){
        return(
            <TouchableOpacity 
            style={{padding: 20, borderBottomColor: "#eaeaea", borderBottomWidth: 0.5}}
            onPress={()=>this.pilih(this.props.data.description)}
        >
                <Text>{this.props.data.description}</Text>
            </TouchableOpacity>
        )
    }
}