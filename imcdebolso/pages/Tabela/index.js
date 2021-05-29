import React, { Component } from 'react';
import moment from "moment";
import "moment/min/locales";
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ToastAndroid,
  AsyncStorage
} from 'react-native';


export default function ({props}){
  const route = useRoute();
  const navigation = useNavigation();
  return < Tabela {...props} navigation={navigation} route={route}/>
};

class Tabela extends Component{
  constructor(){
    global.resultado = ''
    super();
    this.state = {
      dados: [],
      pesoIdeal: '',
      resultado: ''
    }
  }

  componentDidMount(){
    moment.locale('pt');
  }

  render(){

  const { route } = this.props;

  const verificarResultado = () => {
    if(route.params.imc < 20.7){
      global.resultado = "abaixo"
    }
    else if(route.params.imc > 26.5){
      global.resultado= "acima"
    }
  }

  const gerarRandom = () => {
      var numero_aleatorio = Math.random();
      numero_aleatorio = Math.floor(numero_aleatorio * 1000);
      return numero_aleatorio.toString()
    }

  const dataAtual = () => {
      return moment().format('L');   
  }

  const horaAtual = () => {
    return moment().format('LT');
  }

  const salvarDados = async () => {
    try {
      AsyncStorage.setItem(gerarRandom(), 'IMC: ' + route.params.imc + ' / ' + 'Peso: ' + route.params.peso + ' kg' + " / " + dataAtual());
      ToastAndroid.show('Seus dados foram salvos', ToastAndroid.SHORT)
    } catch (error) {
      Alert.alert("Erro ao salvar dados", error)
    }
  };
  
  const { navigation } = this.props;

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.areaInformacoes}>
              <View style={{marginTop: 10, marginLeft: 5, paddingLeft: 15, paddingRight: 15}}>
                <View style={{flexDirection: "row"}}>
                  <Text style={{fontSize: 15, color: "#1E3525"}}>Gênero:  </Text>
                  <Text style={{fontSize: 15, fontWeight: "bold", color: "#1E3525", marginBottom: 5}}>{route.params.sexo}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                  <Text style={{fontSize: 15, color: "#1E3525"}}>Altura:  </Text>
                  <Text style={{fontSize: 15, fontWeight: "bold", color: "#1E3525", marginBottom: 5}}>{route.params.altura}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                  <Text style={{fontSize: 15, color: "#1E3525"}}>Peso atual:  </Text>
                  <Text style={{fontSize: 15, fontWeight: "bold", color: "#1E3525", marginBottom: 5}}>{route.params.peso} kg</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                  <Text style={{fontSize: 15, color: "#1E3525"}}>IMC:  </Text>
                  <Text style={{fontSize: 15, fontWeight: "bold", color: "#1E3525", marginBottom: 5}}>{route.params.imc}</Text>
                </View>
              </View>
              <View style={{width: "50%", marginTop: 10, marginRight: 10, paddingLeft: 15, paddingRight: 15}}>
                  <Text style={{fontSize: 15, color: "#1E3525"}}>Peso Ideal:</Text>
                  <Text style={{fontSize: 25, fontWeight: "bold", color: "#1E3525"}}>{route.params.pesoIdeal.toFixed(2)} kg</Text>
                  <TouchableOpacity
                  style={{backgroundColor: "#1E3525", marginTop: 12, borderRadius: 5, padding: 5}}
                  onPressIn={() => verificarResultado()}
                  onPress={() => {navigation.navigate('Dicas', {screen: 'Dicas', params:{result: this.state.resultado}})}}>
                    <Text style={{textAlign: "center", fontSize: 13, fontWeight: "bold", color: "#FFFFFF"}}>Dicas Nutricionais</Text>
                  </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <View style={{backgroundColor: "#AEB404", padding: 10, alignItems: "center"}}>
                  <Text style={styles.label}>
                    {
                      route.params.sexo == "Homem" ?
                      "IMC menor que 20.7 (Abaixo do peso)": "IMC menor que 19.1 (Abaixo do peso)"
                    }                  
                  </Text>
              </View>
              <View style={{backgroundColor: "#088A08", padding: 10, alignItems: "center"}}>
                    <Text style={styles.label}>
                    {
                      route.params.sexo == "Homem" ?
                      "IMC entre 20.7 e 26.4 (Peso normal)": "IMC entre 19.1 e 25.8 (Peso normal)"
                    }
                    </Text>
              </View>
              <View style={{backgroundColor: "#FE9A2E", padding: 10, alignItems: "center"}}>
                    <Text style={styles.label}>
                    {
                      route.params.sexo == "Homem" ?
                      "IMC entre 26.5 e 27.8 (Pouco acima do peso)": "IMC entre 25.9 e 27.3 (Pouco acima do peso)"
                    }                   
                    </Text>
              </View>
              <View style={{backgroundColor: "#FF4000", padding: 10, alignItems: "center"}}>
                    <Text style={styles.label}>
                    {
                      route.params.sexo == "Homem" ?
                      "IMC entre 27.9 e 31.1 (Acima do peso)": "IMC entre 27.4 e 32.3 (Acima do peso)"
                    }
                    </Text>
              </View>
              <View style={{backgroundColor: "#B40404", padding: 10, alignItems: "center"}}>
                    <Text style={styles.label}>
                    {
                      route.params.sexo == "Homem" ?
                      "IMC maior que 31.2 (Obesidade)": "IMC maior que 32.4 (Obesidade)"
                    }
                    </Text>
              </View>
            </View>
            <View style={{flexDirection: "row", alignSelf: "center"}}>
              <TouchableOpacity
              style={styles.btnSalvar}
              onPress={() => {salvarDados()}}>
                <Text style={{fontSize: 15, fontWeight: "bold", color: "#FFFFFF"}}>Salvar Dados</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.btnHistorico}
              onPress={() => navigation.navigate('Historico')}>
                <Text style={{fontSize: 15, fontWeight: "bold", color: "#FFFFFF"}}>Ver Histórico</Text>
              </TouchableOpacity>
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
    backgroundColor: "#F8F6F6"
  },
  areaInformacoes:{
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#CFFCE6"
  },
  label:{
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  btnHistorico:{
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginRight: 5,
    backgroundColor: "#1E3525"
  },
  btnSalvar:{
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginRight: 5,
    backgroundColor: "#1E3525"
  }
})

/*
<View style={styles.resultadosA}>          
          <View style={styles.infoEsquerda}>
            <Text style={{fontSize: 15, color: "#1E3525"}}>Altura:</Text>
            <Text style={{fontSize: 23, fontWeight: "bold", color: "#1E3525", marginBottom: 10}}>{route.params.altura}</Text>
          </View>
          <View style={styles.infoDireita}>
            <Text style={{fontSize: 15, color: "#1E3525"}}>Peso:</Text>
            <Text style={{fontSize: 23, fontWeight: "bold", color: "#1E3525"}}>{route.params.peso} kg</Text>
          </View>
        </View>
        <View style={styles.resultadosB}>          
          <View style={styles.infoEsquerda}>
            <Text style={{fontSize: 15, color: "#1E3525"}}>Gênero:</Text>
            <Text style={{fontSize: 23, fontWeight: "bold", color: "#1E3525", marginBottom: 10}}>{route.params.sexo}</Text>
          </View>
          <View style={styles.infoDireita}>
            <Text style={{fontSize: 15, color: "#1E3525"}}>IMC:</Text>
            <Text style={{fontSize: 23, fontWeight: "bold", color: "#1E3525"}}>{route.params.imc}</Text>
          </View>
        </View>
*/

/*
<Text style={{fontSize: 12, color: "#1E3525"}}>(Entre 19.6kg e 28.3kg seu peso é considerado saudável)</Text>
*/
