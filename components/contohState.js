import React from 'react';
import {Component} from 'react';

import {Text, View, StyleSheet, Button} from 'react-native';

class ContohState extends Component{
    constructor(props){
        super(props);

        
        this.state = {
            counter: 0
        }
    }

    tambah= ()=>{
        this.setState({
            counter: this.state.counter+=1
        })
    }
    

    render(){
        return(
            <View>
                <Text style={style.textCenter}>Contoh State</Text>
                <Text>{this.state.counter}</Text>
                <Button title="Tambah" onPress={this.tambah} />
            </View>
        )
    }
}

const style = StyleSheet.create({
    textCenter: {
        textAlign: "center"
    }
})

export default ContohState;