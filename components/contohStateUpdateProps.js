import React from 'react';
import {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default class ContohStateUpdateProps extends Component{
    render(){
        return(
            <View>
                <Text style={style.textTengah}>State Update Props</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    textTengah: {
        textAlign: "center",
        color: "red"
    }
})