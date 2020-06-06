import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import GlobalStyles from './utility/globalStyles';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';

import JohnWick from '../assets/user-avatar.jpg';

export default class CustomDrawerMenu extends Component{

    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.replace('login');
    }

    render(){
        return(
            <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>

                <View style={{backgroundColor: "#fff", borderBottomColor: GlobalStyles.mainColor, borderBottomWidth: 2, paddingBottom: 10}}>
                    <View style={{height: 150, width: 150, backgroundColor: "yellow", alignItems: "center", justifyContent:"center", borderRadius: 75, overflow: "hidden"}}>
                        <Image source={JohnWick} style={{resizeMode:"contain", maxHeight: "100%"}} />
                    </View>
                </View>
                
                {/* PAGES */}
                <View style={{borderBottomColor: GlobalStyles.mainColor, borderBottomWidth: 2, paddingBottom: 10}}>
                    {/* AKUN */}
                    <DrawerItem
                        style={{borderBottomColor: "#eaeaea", borderBottomWidth: 0.5}}
                        icon={({color, size})=>(
                            <Icon
                                name="user"
                                color={GlobalStyles.mainColor}
                                size={size}
                            ></Icon>
                        )}
                        label="Akun"
                        onPress={()=>this.props.navigation.navigate('Akun')}
                    >
                    </DrawerItem>

                    {/* FAQ */}
                    <DrawerItem
                        style={{borderBottomColor: "#eaeaea", borderBottomWidth: 0.5}}
                        icon={({color, size})=>(
                            <Icon
                                name="question"
                                color={GlobalStyles.mainColor}
                                size={size}
                            ></Icon>
                        )}
                        label="FAQ"
                        onPress={()=>this.props.navigation.navigate('Faq')}
                    >
                    </DrawerItem>

                    {/* TENTANG */}
                    <DrawerItem
                        style={{borderBottomColor: "#eaeaea", borderBottomWidth: 0.5}}
                        icon={({color, size})=>(
                            <Icon
                                name="user-secret"
                                color={GlobalStyles.mainColor}
                                size={size}
                            ></Icon>
                        )}
                        label="Tentang Kami"
                        onPress={()=>this.props.navigation.navigate('Tentang')}
                    >
                    </DrawerItem>
                </View>

                <View>
                    <TouchableOpacity 
                        style={{width: "100%", padding: 20, flexDirection: "row"}}
                        onPress={this.logout}
                    >
                        <IconAnt 
                            name="logout"
                            size={20}
                            color={GlobalStyles.mainColor}
                        />
                        <Text style={{marginLeft: 30}}>Logout</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}