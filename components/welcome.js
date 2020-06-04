import React, {Component} from 'react';
import {View, Image} from 'react-native';
import LogoWelcome from '../assets/logo-splash.png';
import globalStyle from './utility/globalStyles';

export default class Welcome extends Component{

    componentDidMount(){
        setTimeout(()=> {
            this.props.navigation.replace('login');
        }, 2000)
    }

    render(){
        return(
            <View 
                style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: globalStyle.mainColor}}>
                <Image source={LogoWelcome} />
            </View>
        )
    }
}