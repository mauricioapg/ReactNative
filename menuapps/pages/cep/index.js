/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image
} from 'react-native';


export default class Teste extends Component{

    constructor(){
        super();
        this.state = {
            cep: '',
            dadosRua: {
                address: '',
                state: '',
                city: '',
                disctrict: ''
            },
        }
    }

    buscarCep(){
        fetch("https://cep.awesomeapi.com.br/json/" + this.state.cep)
        .then(res => res.json())
        .then(data => {
            this.setState({
                dadosRua: data
            })
        })
    }

    componentDidMount(){
        
    }    

    render(){
        
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <TextInput style={styles.txtCep}
                            value={this.state.cep}
                            onChangeText={cep => this.setState({cep})}
                            placeholder={"Digite seu CEP"}>
                    </TextInput>
                    <TouchableOpacity 
                            style={styles.btnBuscar}
                            onPress={this.buscarCep()}>
                            <Text style={{color: "#FFFFFF", fontSize: 20, fontWeight: "bold"}}>Buscar</Text>
                    </TouchableOpacity>
                    <View hide>
                        <Text style={styles.labelDescricao}>Logradouro: </Text>
                        <Text style={styles.labelResposta}>{this.state.dadosRua.address}</Text>                    
                        <Text style={styles.labelDescricao}>Bairro: </Text>
                        <Text style={styles.labelResposta}>{this.state.dadosRua.district}</Text>
                        <Text style={styles.labelDescricao}>Cidade: </Text>
                        <Text style={styles.labelResposta}>{this.state.dadosRua.city}</Text>
                        <Text style={styles.labelDescricao}>UF: </Text>
                        <Text style={styles.labelResposta}>{this.state.dadosRua.state}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#B5ECC7"
  },
  txtCep:{
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  btnBuscar:{
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#1E3525"
  },
  labelDescricao:{
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 10,
    marginTop: 20,
    color: "#1E3525"
  },
  labelResposta:{
      fontSize: 20
  },
})
