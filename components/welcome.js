import React, {Component} from 'react';
import {View, Image} from 'react-native';
import LogoWelcome from '../assets/logo-welcome.png';

export default class Welcome extends Component{

    componentDidMount(){
        setTimeout(()=> {
            this.props.navigation.replace('login');
        }, 2000)
    }

    render(){
        return(
            <View 
                style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#ff7143"}}>
                <Image source={LogoWelcome} />
            </View>
        )
    }
}