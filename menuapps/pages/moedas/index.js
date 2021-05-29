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
  Image,
  Picker
} from 'react-native';


export default class Teste extends Component{

    constructor(){
        super();
        this.state = {
            arrayMoedas: [
                {name: "Reais brasileiros", value: "real"},
                {name: "Dólares Americanos", value: "dolar"},
                {name: "Euros", value: "euro"},
            ],
            dadosMoedas: [],
            moedaOrigem: '',
            moedaDestino: '',
            valorOrigem: '',
            valorConvertido: '',
            moedaConvertida: '',
            dataAtualizacao: '',
        }
    }

    carregarMoedas(){
        fetch("https://economia.awesomeapi.com.br/json/daily/USD-BRL/1")
        .then(res => res.json())
        .then(res => {
            this.setState({dadosMoedas: res})
        })
    }
    
    componentDidMount(){
        this.carregarMoedas();        
    }    

    render(){

        const trocar = () => {
            this.setState({moedaOrigem: this.state.moedaDestino})
            this.setState({moedaDestino: this.state.moedaOrigem})
        }

        const dataAtual = () => {
            var dia = new Date().getDate();
            var mes = new Date().getMonth();
            var ano = new Date().getFullYear();
            return dia + "/" + mes + "/" + ano;   
        }

        const calcular = () => {
            if(this.state.valorOrigem == ""){
                Alert.alert("Digite um valor")
            }
            else{
                if(this.state.moedaOrigem == "real" && this.state.moedaDestino == "dolar"){
                    var resultado = parseFloat(this.state.valorOrigem.toString()) * 0.17
                    var temp = resultado.toFixed(2)
                    resultado = parseFloat(temp)
                    this.setState({valorConvertido: "$ " + resultado})
                    this.setState({moedaConvertida: "Dólares americanos"})
                    this.setState({dataAtualizacao: "Atualizado em: " + dataAtual()})
                }
                else if(this.state.moedaOrigem == "dolar" && this.state.moedaDestino == "real"){
                    var resultado = parseFloat(this.state.valorOrigem.toString()) * 5.38
                    var temp = resultado.toFixed(2)
                    resultado = parseFloat(temp)
                    this.setState({valorConvertido: "$ " + resultado})
                    this.setState({moedaConvertida: "Reais brasileiros"})
                    this.setState({dataAtualizacao: "Atualizado em: " + dataAtual()})
                }
                else if(this.state.moedaOrigem == "euro" && this.state.moedaDestino == "real"){
                    var resultado = parseFloat(this.state.valorOrigem.toString()) * 6.10
                    var temp = resultado.toFixed(2)
                    resultado = parseFloat(temp)
                    this.setState({valorConvertido: "$ " + resultado})
                    this.setState({moedaConvertida: "Reais brasileiros"})
                    this.setState({dataAtualizacao: "Atualizado em: " + dataAtual()})
                }
                else if(this.state.moedaOrigem == "real" && this.state.moedaDestino == "euro"){
                    var resultado = parseFloat(this.state.valorOrigem.toString()) * 0.16
                    var temp = resultado.toFixed(2)
                    resultado = parseFloat(temp)
                    this.setState({valorConvertido: "$ " + resultado})
                    this.setState({moedaConvertida: "Euros"})
                    this.setState({dataAtualizacao: "Atualizado em: " + dataAtual()})
                }
                else if(this.state.moedaOrigem == "dolar" && this.state.moedaDestino == "euro"){
                    var resultado = parseFloat(this.state.valorOrigem.toString()) * 0.92
                    var temp = resultado.toFixed(2)
                    resultado = parseFloat(temp)
                    this.setState({valorConvertido: "$ " + resultado})
                    this.setState({moedaConvertida: "Euros"})
                    this.setState({dataAtualizacao: "Atualizado em: " + dataAtual()})
                }
                else if(this.state.moedaOrigem == "euro" && this.state.moedaDestino == "dolar"){
                    var resultado = parseFloat(this.state.valorOrigem.toString()) * 1.09
                    var temp = resultado.toFixed(2)
                    resultado = parseFloat(temp)
                    this.setState({valorConvertido: "$ " + resultado})
                    this.setState({moedaConvertida: "Dólares Americanos"})
                    this.setState({dataAtualizacao: "Atualizado em: " + dataAtual()})
                }
                else if(this.state.moedaOrigem == this.state.moedaDestino){
                    var resultado = this.state.valorOrigem
                    this.setState({valorConvertido: "$ " + resultado})
                    this.setState({moedaConvertida: "Dólares Americanos"})
                    this.setState({dataAtualizacao: "Atualizado em: " + dataAtual()})
                }
            }
            Alert.alert("Teste", "Cotação: " + this.state.moedaOrigem +
            "\nMoeda: " + this.state.dadosMoedas.map((item, key) => (item.code)
            ))
        }
        
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View>
                    <Image style={styles.logo} source={require('./logo_moedas.png')} />
                    <View>
                        <View style={{flexDirection: "row"}}>
                            <TextInput style={styles.txtValorOrigem}
                            value={this.state.valorOrigem}
                            onChangeText={(texto) => this.setState({valorOrigem: texto})}
                            placeholder={"Digite o valor"}>
                            </TextInput>
                            <TouchableOpacity 
                            style={styles.btnCalcular}
                            onPress={() => calcular()}>
                            <Text style={{color: "#FFFFFF", fontSize: 17, fontWeight: "bold"}}>Calcular</Text>
                            </TouchableOpacity> 
                        </View>                           
                        <View style={styles.pickerMoedaOrigem}>
                            <Picker
                            selectedValue={this.state.moedaOrigem}
                            style={{height: 50, width: "100%"}}
                            onValueChange={(itemValue, itemIndex) => this.setState({moedaOrigem: itemValue})}>
                                {this.state.dadosMoedas.map((item, key) => (
                                    <Picker.Item label={item.name} value={item.ask} key={key} />
                                )
                                )}                                                                
                            </Picker>
                        </View>            
                        <TouchableOpacity 
                        style={styles.btnTrocar}
                        onPress={() => trocar()}>
                        <Image style={{alignSelf: "center"}} source={require('./botao_trocar.png')} />
                        </TouchableOpacity>
                        <View style={styles.pickerMoedaDestino}>
                            <Picker
                            selectedValue={this.state.moedaDestino}
                            style={{height: 50, width: "100%"}}
                            onValueChange={(itemValue, itemIndex) => this.setState({moedaDestino: itemValue})}>
                                {this.state.dadosMoedas.map((item, key) => (
                                    <Picker.Item label={item.name} value={item.ask} key={key} />
                                )
                                )}
                            </Picker>                            
                        </View>
                        <View>
                            <Text style={{textAlign: "center", fontSize: 30, fontWeight: "bold"}}>{this.state.valorConvertido}</Text>
                            <Text style={{textAlign: "center", fontSize: 20}}>{this.state.moedaConvertida}</Text>
                        </View>          
                    </View>
                    </View>
                    <Text style={styles.labelAtualizacao}>{this.state.dataAtualizacao}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#B5ECC7"
  },
  logo:{
    alignSelf: "center",
    marginBottom: 30,
    color: "#1E3525"
  },
  txtValorOrigem:{
    fontSize: 20,
    width: "60%",
    marginBottom: 10,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  pickerMoedaOrigem:{
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#1E3525"
  },
  pickerMoedaDestino:{
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      borderColor: "#1E3525"
  },
  btnCalcular:{
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: 120,
    padding: 10,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: "#1E3525"
  },
  btnTrocar:{
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
    borderRadius: 5,
    width: "20%",
    height: "8%",
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "#C1C634"
  },
  labelAtualizacao: {
    fontSize: 10,
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0
  },
})

//export default App;
