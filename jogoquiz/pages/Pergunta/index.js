import React, { Component } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  AsyncStorage
} from 'react-native';

import CustomHeader from "../../components/CustomHeader";

export default function({props}){
  const navigation = useNavigation();
  const route = useRoute();    
  return <Pergunta navigation={navigation} route={route}/>
};

class Pergunta extends Component{
  constructor(){
    super();
    this.state = {
      dados: [],
      perguntaEscolhida: '',
      opcaoA: false,
      opcaoB: false,
      opcaoC: false,
      opcaoD: false,
      alternativa1: '',
      alternativa2: '',
      alternativa3: '',
      alternativa4: '',
      respostaEscolhida: '',
      respostaCorreta: ''
    }
  }

  async teste(){
    try {
      const array = await AsyncStorage.getAllKeys();
      const results = await AsyncStorage.multiGet(array);
      for(var i=0; i < results.length; i++){
        var temp = results[i].toString()
        if(temp.substring(0, 2) == this.chavePerguntaCorreta().substring(2, 4)){
          Alert.alert(temp.substring(0, 2), this.chavePerguntaCorreta().substring(2, 4))
        }
        else{
          Alert.alert('não deu certo')
        }        
      }
    } catch (error) {
      Alert.alert("Erro", error);
    }
  }


  async BuscarDados(){
    try {
      let aux = []
      const array = await AsyncStorage.getAllKeys();
      const results = await AsyncStorage.multiGet(array);
      for(var i=0; i < results.length; i++){
        var temp = results[i].toString()
        if(temp.substring(0, 1) == global.Parametro){ //verificar também se não está na lista de respondidas
          aux.push(temp)
          this.setState({dados: aux})
        }        
      }
      this.embaralharArray(this.state.dados);
      this.setState({perguntaEscolhida: this.state.dados[0]})
      this.exibirAlternativas()
    } catch (error) {
      Alert.alert("Erro ao carregar dados", error);
    }
  }

  embaralharArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  exibirAlternativas(){
    const temp = this.state.perguntaEscolhida.toString()
    switch(temp.substring(0, 2)){
      case 'h1':
        this.setState({alternativa1: 'Pedro Álvares Cabral'})
        this.setState({alternativa2: 'Tiradentes'})
        this.setState({alternativa3: 'Pero Vaz de Caminha'})
        this.setState({alternativa4: 'Dom Pedro II'})
        this.setState({respostaCorreta: 'Pero Vaz de Caminha'})
        break;
      case 'h2':
        this.setState({alternativa1: '1890'})
        this.setState({alternativa2: '1500'})
        this.setState({alternativa3: '1900'})
        this.setState({alternativa4: '1822'})
        this.setState({respostaCorreta: '1822'})
        break;
      case 'h3':
        this.setState({alternativa1: 'Rei da Espanha'})
        this.setState({alternativa2: 'Rei de Portugal'})
        this.setState({alternativa3: 'Rei da Inglaterra'})
        this.setState({alternativa4: 'Rei da Escócia'})
        this.setState({respostaCorreta: 'Rei de Portugal'})
        break;
      case 'h4':
        this.setState({alternativa1: 'No Período Paleolítico'})
        this.setState({alternativa2: 'Na Idade Média'})
        this.setState({alternativa3: 'Na Idade dos Metais'})
        this.setState({alternativa4: 'No Período Neolítico'})
        this.setState({respostaCorreta: 'No Período Neolítico'})
        break;
      case 'g1':
        this.setState({alternativa1: 'Cerrado'})
        this.setState({alternativa2: 'Caatinga'})
        this.setState({alternativa3: 'Amazônia'})
        this.setState({alternativa4: 'Pantanal'})
        this.setState({respostaCorreta: 'Amazônia'})
        break;
      case 'g2':
        this.setState({alternativa1: 'Sudeste - 7 estados'})
        this.setState({alternativa2: 'Nordeste - 9 estados'})
        this.setState({alternativa3: 'Norte - 9 estados'})
        this.setState({alternativa4: 'Norte - 6'})
        this.setState({respostaCorreta: 'Nordeste - 9 estados'})
        break;
      case 'g3':
        this.setState({alternativa1: 'Mercosul'})
        this.setState({alternativa2: 'Comunidade Andina'})
        this.setState({alternativa3: 'Mercosul e Nafta'})
        this.setState({alternativa4: 'Mercosul e Apec'})
        this.setState({respostaCorreta: 'Mercosul'})
        break;
      case 'g4':
        this.setState({alternativa1: 'Rodoviário'})
        this.setState({alternativa2: 'Subterrâneo'})
        this.setState({alternativa3: 'Ferroviário'})
        this.setState({alternativa4: 'Aéreo'})
        this.setState({respostaCorreta: 'Aéreo'})
        break;
      default:
        // code block
    }
  }

  substringPerguntaEscolhida(){
    const temp = this.state.perguntaEscolhida.toString()
    return temp.substring(3, temp.length)
  }

  chavePerguntaCorreta(){
    const temp = this.state.perguntaEscolhida.toString()
    return temp.substring(0, 3)
  }

  componentDidMount(){
    const { navigation } = this.props;  
    this.focusListener = navigation.addListener('focus', () => {
      if(global.Parametro == ''){
        Alert.alert('erro')
      }
      else{
      this.BuscarDados();
      }
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  render(){

    const { navigation } = this.props;

    const EscolherOpcao = () => {
      this.setState({opcaoA: false});
      this.setState({opcaoB: false});
      this.setState({opcaoC: false});
      this.setState({opcaoD: false});
      if(this.state.opcaoA == true){
        this.setState({opcaoB: false});
        this.setState({opcaoC: false});
        this.setState({opcaoD: false});       
      }
      else if(this.state.opcaoB == true){
        this.setState({opcaoA: false});
        this.setState({opcaoC: false});
        this.setState({opcaoD: false});       
      }
      else if(this.state.opcaoC == true){
        this.setState({opcaoA: false});
        this.setState({opcaoB: false});
        this.setState({opcaoD: false});       
      }
      else if(this.state.opcaoD == true){
        this.setState({opcaoA: false});
        this.setState({opcaoB: false});
        this.setState({opcaoC: false});       
      }
    }

    const VerificarResposta = () => {
      if(this.state.respostaEscolhida == this.state.respostaCorreta){
        //Alert.alert(this.chavePerguntaCorreta(), this.substringPerguntaEscolhida())
        //AsyncStorage.setItem('ok' + this.chavePerguntaCorreta(), this.substringPerguntaEscolhida())
        this.BuscarDados()
      }
      else if(this.state.respostaEscolhida != this.state.respostaCorreta){
        Alert.alert('Resposta Errada')
      }
    }

    return(
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Quiz" navigation={navigation}/>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={{width: "96%", height: 200, marginTop: 10, padding: 20, borderRadius: 10, 
                backgroundColor: "#A9E2F3", justifyContent: "center"}}>
                  <Text style={{fontSize: 20}}>{this.substringPerguntaEscolhida()}</Text>
                </View>
                <View style={styles.viewOpcao}>
                  <TouchableHighlight style={[styles.opcao, this.state.opcaoA == true ? 
                  {backgroundColor: "#08298A"} : {}]}
                  onPress={() => this.setState({opcaoA: true})}
                  onPressIn={() => EscolherOpcao()}
                  onShowUnderlay={() => this.setState({respostaEscolhida: this.state.alternativa1})}>
                    <Text style={{fontSize: 20, color: "#FFFFFF"}}>{this.state.alternativa1}</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.viewOpcao}>
                  <TouchableHighlight style={[styles.opcao, this.state.opcaoB == true ? 
                  {backgroundColor: "#08298A"} : {}]}
                  onPress={() => this.setState({opcaoB: true})}
                  onPressIn={() => EscolherOpcao()}
                  onShowUnderlay={() => this.setState({respostaEscolhida: this.state.alternativa2})}>
                    <Text style={{fontSize: 20, color: "#FFFFFF"}}>{this.state.alternativa2}</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.viewOpcao}>
                  <TouchableHighlight style={[styles.opcao, this.state.opcaoC == true ? 
                  {backgroundColor: "#08298A"} : {}]}
                  onPress={() => this.setState({opcaoC: true})}
                  onPressIn={() => EscolherOpcao()}
                  onShowUnderlay={() => this.setState({respostaEscolhida: this.state.alternativa3})}>
                    <Text style={{fontSize: 20, color: "#FFFFFF"}}>{this.state.alternativa3}</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.viewOpcao}>
                  <TouchableHighlight style={[styles.opcao, this.state.opcaoD == true ? 
                  {backgroundColor: "#08298A"} : {}]}
                  onPress={() => this.setState({opcaoD: true})}
                  onPressIn={() => EscolherOpcao()}
                  onShowUnderlay={() => this.setState({respostaEscolhida: this.state.alternativa4})}>
                    <Text style={{fontSize: 20, color: "#FFFFFF"}}>{this.state.alternativa4}</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.viewConfirmar}>
                  <TouchableOpacity style={styles.confirmar}
                  onPress={() => VerificarResposta()}>
                    <Text style={{fontSize: 20, color: "#FFFFFF", fontWeight: "bold"}}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F6F6"
  },
  opcao:{
    borderRadius: 10, 
    backgroundColor: "#0378FF",
    justifyContent: "center",
    width: "100%",
    height: 70,
    padding: 20
  },
  viewOpcao:{
    width: "105%",
    height: 70,
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  confirmar:{
    borderRadius: 10, 
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20
  },
  viewConfirmar:{
    width: "105%",
    paddingTop: 60,
    paddingRight: 20,
    paddingLeft: 20
  }
})
