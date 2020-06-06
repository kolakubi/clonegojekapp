import React, {Component} from 'react';
import {View, Image, AsyncStorage} from 'react-native';
import LogoWelcome from '../assets/logo-splash.png';
import globalStyle from './utility/globalStyles';

export default class Welcome extends Component{

    componentDidMount(){
        setTimeout(()=> {
            this.isLoggedIn();
        }, 2000)
    }

    isLoggedIn = async ()=> {
        const isLoggedIn = await AsyncStorage.getItem('loggedIn');
        this.props.navigation.replace(isLoggedIn ? 'home' : 'login');
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