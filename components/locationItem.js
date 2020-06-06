import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native'

export default class LocationItem extends Component{

    handlePress = async () => {
        // const res = await this.props.fetchDetails(this.props.place_id);

        // console.log(this.props.description);
    }

    render(){
        return(
            <TouchableOpacity 
                style={{padding: 20, borderBottomColor: "#eaeaea", borderBottomWidth: 0.5}}
                onPress={()=>this.props.setAddress(this.props.description)} >
        
                <Text>{this.props.data.description}</Text>
            </TouchableOpacity>
        )
    }
}