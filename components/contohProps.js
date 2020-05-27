import React from 'react';
import {Component} from 'react';
import {View, Text} from 'react-native';

class ContohProps extends Component{

    render(){
        return(
            <View>
                <Text>Aku Suka Buku {this.props.buku}</Text>
            </View>
        )
    }
}

export default ContohProps;