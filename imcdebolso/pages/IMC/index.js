/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import CustomHeader from "../../components/CustomHeader";

export default function({props}){
  const navigation = useNavigation();  
  return < IMC navigation={navigation} />
};

class IMC extends Component{
  constructor(){
    super();
    this.state = {
      caminho: '',
      peso: '',
      altura: '',
      imc: '',
      diagnostico: '',
      corDiagnostico: '',
      status: false,
      homem: false,
      mulher: false,
      sexo: '',
      pesoIdeal: '',
      alturaCentimetros: ''
    }
  }

  render(){

    const verificarPesoAltura = () => {
      if(this.state.altura.indexOf(',').toString() != -1){
        this.state.altura = this.state.altura.replace(',','.')
      }
      if(this.state.peso.indexOf(',').toString() != -1){
        this.state.peso = this.state.peso.replace(',','.')
      }
    }

    const calcularIMC = () => {
      if(this.state.peso == '' || this.state.altura == ''){
        Alert.alert('Atenção!', 'Informe os valores');
      }
      else if(this.state.homem == false && this.state.mulher == false){
        Alert.alert('Atenção!', 'Selecione um gênero');
      }
      else{
        verificarPesoAltura();
        var imc = parseFloat(this.state.peso) / (parseFloat(this.state.altura) * parseFloat(this.state.altura))
        var temp = imc.toFixed(2)
        imc = parseFloat(temp)
        if(isNaN(imc)){
          Alert.alert('Atenção!', 'Valor(es) inválido(s)');
          limpar();        
        }
        else if(this.state.altura.indexOf(',').toString() == -1 && this.state.altura.indexOf('.').toString() == -1){
          Alert.alert('Atenção!', 'Formato de altura inválido');       
        }
        else{
          this.setState({imc: imc.toString()})
          if(this.state.sexo == 'Homem'){
            if (imc < 20.7) {
              this.setState({corDiagnostico: '#AEB404'})
              this.setState({diagnostico: 'ABAIXO DO PESO'})
            }
            else if (imc >= 20.7 && imc < 26.4) {
              this.setState({corDiagnostico: '#088A08'})
              this.setState({diagnostico: 'PESO NORMAL'})
            }
            else if (imc >= 26.5 && imc < 27.8) {
              this.setState({corDiagnostico: '#FE9A2E'})
              this.setState({diagnostico: 'POUCO ACIMA DO PESO'})
            }
            else if (imc >= 27.9 && imc < 31.1) {
              this.setState({corDiagnostico: '#FF4000'})
              this.setState({diagnostico: 'ACIMA DO PESO'})
            }
            else if (imc > 31.2) {
              this.setState({corDiagnostico: '#B40404'})
              this.setState({diagnostico: 'OBESIDADE'})
            }
          }
          else if(this.state.sexo == 'Mulher'){
            if (imc < 19.1) {
              this.setState({corDiagnostico: '#AEB404'})
              this.setState({diagnostico: 'ABAIXO DO PESO'})
            }
            else if (imc >= 19.1 && imc < 25.8) {
              this.setState({corDiagnostico: '#088A08'})
              this.setState({diagnostico: 'PESO NORMAL'})
            }
            else if (imc >= 25.9 && imc < 27.3) {
              this.setState({corDiagnostico: '#FE9A2E'})
              this.setState({diagnostico: 'POUCO ACIMA DO PESO'})
            }
            else if (imc >= 27.4 && imc < 32.3) {
              this.setState({corDiagnostico: '#FF4000'})
              this.setState({diagnostico: 'ACIMA DO PESO'})
            }
            else if (imc > 32.4) {
              this.setState({corDiagnostico: '#B40404'})
              this.setState({diagnostico: 'OBESIDADE'})
            }
          }    
        this.setState({status: true});
        }
      }
    }
    
    const limpar = () => {
      this.setState({peso: ''});
      this.setState({altura: ''});
      this.setState({diagnostico: ''});
      this.setState({imc: ''});
      this.setState({status: false});
      this.setState({sexo: ''});
      this.setState({mulher: false});
      this.setState({homem: false});
    }    

    const calcularPesoIdeal = () => {
    var temp = this.state.altura.replace('.','')
    var alturaCentimetros = parseInt(temp);      
      if(this.state.sexo == 'Homem'){
        this.setState({pesoIdeal: parseInt((alturaCentimetros) - 100) * 0.90})
      }
      else{
        this.setState({pesoIdeal: parseInt((alturaCentimetros) - 100) * 0.85})
      }
    }

    const { navigation } = this.props;

    return(
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="IMC de Bolso" navigation={navigation}/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <View style={{flexDirection: "row", marginBottom: 10, marginTop: 10, justifyContent: "center"}}>
              <TouchableHighlight 
              style={[styles.btnGenero, this.state.homem ? {backgroundColor: "#1E3525"}:{}]}
              onPress={() => this.setState({mulher: false})}
              onPressIn={() => this.setState({sexo: 'Homem'})}
              onShowUnderlay={() => this.setState({homem: true})}>
              <Text style={{color: "#FFFFFF", fontSize: 17, fontWeight: "bold"}}>Homem</Text>
              </TouchableHighlight>
              <TouchableHighlight 
              style={[styles.btnGenero, this.state.mulher ? {backgroundColor: "#1E3525"}:{}]}
              onPress={() => this.setState({homem: false})}
              onPressIn={() => this.setState({sexo: 'Mulher'})}
              onShowUnderlay={() => this.setState({mulher: true})}>
              <Text style={{color: "#FFFFFF", fontSize: 17, fontWeight: "bold"}}>Mulher</Text>
              </TouchableHighlight> 
            </View>
            <View style={{width: 280, alignSelf: "center"}}>
              <Text style={styles.label}>Peso:</Text>
              <TextInput style={styles.caixaTexto}
                  value={this.state.peso.toString()}
                  onChangeText={(texto) => this.setState({peso: texto})}
                  keyboardType="numeric">
              </TextInput>
              <Text style={styles.label}>Altura:</Text>
              <TextInput style={styles.caixaTexto}
                  value={this.state.altura.toString()}
                  onChangeText={(texto) => this.setState({altura: texto})}
                  keyboardType="numeric">
              </TextInput>
            </View>
            <View style={{width: 280, alignSelf: "center"}}>
              <TouchableOpacity 
                style={styles.btnCalcular}
                onPress={() => calcularIMC()}>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "#FFFFFF"}}>Calcular</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.btnLimpar}
                onPress={() => limpar()}>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "#FFFFFF"}}>Limpar</Text>
              </TouchableOpacity>
              <Text style={styles.imc}>{this.state.imc}</Text>
              <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold", color: this.state.corDiagnostico}}>{this.state.diagnostico}</Text>                     
            </View>
          </View>
          <View>
            {
              this.state.status ?
              <TouchableOpacity
              style={styles.btnVerResultados}
              onPressIn={() => calcularPesoIdeal()}
              onPress={() => navigation.navigate('Tabela', {screen: 'Tabela', params:{
                sexo: this.state.sexo, imc: this.state.imc, peso: this.state.peso, altura: this.state.altura, diagnostico: this.state.diagnostico,
                pesoIdeal: this.state.pesoIdeal}})}>
                <Text style={{fontSize: 15, fontWeight: "bold", color: "#1E3525"}}>Ver tabela de IMC</Text>
              </TouchableOpacity> : null
            }
          </View>
      </View>
      </TouchableWithoutFeedback>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#F8F6F6"
  },
  logo:{
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 15,
    color: "#1E3525"
  },
  label:{
    fontSize: 15,
    marginBottom: 5,
    //fontWeight: "bold",
    color: "#1E3525"
  },
  caixaTexto:{
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 5,
    //borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  btnCalcular:{
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#1E3525"
  },
  btnLimpar:{
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "#67b637"
  },
  btnGenero:{
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    padding: 2,
    borderRadius: 5,
    backgroundColor: "#67b637"
  },
  btnVerResultados:{
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: "#CEED07"
  },
  imc:{
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 10,
    color: "#1E3525",
  },
})
