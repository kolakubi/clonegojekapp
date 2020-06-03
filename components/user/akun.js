import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import globalStyles from '../utility/globalStyles';

export default class Akun extends Component{
    render(){
        return(
            <View style={{flex: 1}}>

                <View>
                    {/* HEADER */}
                    <View style={{width: "100%", height: 60, flexDirection: "row", alignItems: "center", borderBottomColor: "grey", borderBottomWidth: 0.5, backgroundColor: globalStyles.mainColor}}>

                        <TouchableOpacity 
                            style={{marginLeft: 25, marginRight: 40}}
                            onPress={this.props.navigation.goBack}>
                            <Icon name="arrow-left" size={18} color="#fff" />
                        </TouchableOpacity>

                        <Text style={{color: "#fff", fontSize: 20, fontWeight: "bold"}}>Akun</Text>

                    </View>
                </View>

                <View style={globalStyles.container}>
                    <Text>Akun</Text>
                </View>

            </View>
            
        )
    }
}