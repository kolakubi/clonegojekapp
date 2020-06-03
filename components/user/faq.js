import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LocationItem from './locationItem'
import globalStyles from '../utility/globalStyles';

import {GoogleAutoComplete} from 'react-native-google-autocomplete';
const API_KEYS = "AIzaSyD33T5gzUPZ9VBUudLSItOmgKUt5cmkSZk";

export default class Faq extends Component{

    constructor(props){
        super(props);

        this.state= {
            address: ""
        }
    }

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

                        <Text style={{color: "#fff", fontSize: 20, fontWeight: "bold"}}>FAQ</Text>

                    </View>
                </View>

                <View style={globalStyles.container}>
                    <Text>FAQ</Text>

                    <GoogleAutoComplete 
                        apiKey={API_KEYS}
                        debounce="500"
                        minLength="7"
                        radius="4000"
                        components="country:id"
                    >
                        {({ handleTextChange, locationResults, isSearching })=>(
                            <React.Fragment>
                                {console.log('locationResults', locationResults)}
                                <View>
                                    <TextInput 
                                        value={this.props.value}
                                        placeholder="ketik alamat" 
                                        onChangeText={handleTextChange}
                                    />
                                </View>
                                {isSearching && <ActivityIndicator size="large" color="red" />}
                                <ScrollView>
                                    {locationResults.map((data)=>(
                                        <LocationItem 
                                        {...data}
                                        key={data.id}
                                        data={data} />
                                    ))}
                                </ScrollView>
                            </React.Fragment>
                        )}
                    </GoogleAutoComplete>
                </View>

            </View>
        )
    }
}