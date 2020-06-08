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
        // const key = JSON.parse(await AsyncStorage.getItem('user')).key;
        // const username = JSON.parse(await AsyncStorage.getItem('user')).username;
        // console.log(key, username)
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