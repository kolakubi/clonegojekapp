import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GlobalStyle from './utility/globalStyles';

// REDUX
import {connect} from 'react-redux';
import actionTypes from '../redux/reducers/actionTypes';

class AlamatSayaComp extends Component{

    pilihAlamat = (data) => {
        this.props.pilihAlamat(data);
    }

    componentDidMount(){
        // console.log(this.props.dipilih)
    }

    render(){
        return(
            <View style={{...GlobalStyle.shadowBox, padding: 15, marginBottom: 20}}>
                {/* ALAMAT */}
                <View style={{marginBottom: 10}}>
                    <Text style={{fontWeight: "bold", fontSize: 16, color: "#000"}}>
                        {this.props.data.alamat}
                    </Text>
                </View>

                {/* NAMA & TELPON */}
                <View style={{marginBottom: 10}}>
                    <Text>
                        {this.props.data.nama_penerima}
                    </Text>
                    <Text style={{color: GlobalStyle.mainColor, fontWeight: "bold"}}>
                        {this.props.data.telpon_penerima}
                    </Text>
                </View>
                
                {/* BUTTONS */}
                <View style={{justifyContent: "flex-end", flexDirection: "row"}}>

                    {/* EDIT */}
                    <TouchableOpacity 
                        style={{paddingVertical: 10, paddingHorizontal: 15, borderWidth: 2, borderColor: GlobalStyle.mainColor, borderRadius: 10, marginRight: 10}}
                    >
                        <Text style={{color: GlobalStyle.mainColor, fontSize: 14}}>
                            Edit
                        </Text>
                    </TouchableOpacity>

                    {/* PILIH ALAMAT */}
                    {this.props.dipilih ?
                    <TouchableOpacity 
                        style={{paddingVertical: 10, paddingHorizontal: 15, borderWidth: 2, borderColor: GlobalStyle.mainColor, backgroundColor: GlobalStyle.mainColor, borderRadius: 10}}
                    >
                        <Text style={{color: "#fff", fontSize: 14}}>
                            Dipilih
                        </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity 
                        style={{paddingVertical: 10, paddingHorizontal: 15, borderWidth: 2, borderColor: GlobalStyle.mainColor, borderRadius: 10}}
                        onPress={()=>this.pilihAlamat(this.props.data)}
                    >
                        <Text style={{color: GlobalStyle.mainColor, fontSize: 14}}>
                            Pilih Alamat
                        </Text>
                    </TouchableOpacity>
                    
                }
                </View>
                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alamat: state.alamat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pilihAlamat: (data) => dispatch({
            type: actionTypes.CHOOSE_ADDRESS,
            alamat: data 
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlamatSayaComp)