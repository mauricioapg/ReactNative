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
  AsyncStorage
} from 'react-native';

import CustomHeader from "../../components/CustomHeaderHome";

export default function({props}){
  const navigation = useNavigation();  
  return <Home navigation={navigation}/>
};

class Home extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  async InserirDados(){
    if(await AsyncStorage.getAllKeys() == ""){
      try {
        //PERGUNTAS DE HISTÓRIA
        AsyncStorage.setItem('h1', 'Qual o nome do escrivão que redigiu a carta, endereçada a Dom Manuel I,'+
        'rei de Portugal, descrevendo as impressões que tiveram das terras recém descobertas, que viriam a'+
        'ser o Brasil?');
        AsyncStorage.setItem('h2', 'Em que ano Dom Pedro I proclamou a independência do Brasil?');
        AsyncStorage.setItem('h3', 'Quem foi Dom João VI?');
        AsyncStorage.setItem('h4', 'Em qual período a religião se desenvolveu?');

        //PERGUNTAS DE GEOGRAFIA
        AsyncStorage.setItem('g1', 'Qual o bioma é mais presente na região norte do Brasil?');
        AsyncStorage.setItem('g2', 'Qual a região do Brasil que tem o maior número de estados,'+
        'e qual a quantidade?');
        AsyncStorage.setItem('g3', 'O Brasil faz parte de qual ou quais bloco(s) econômico(s)?');
        AsyncStorage.setItem('g4', 'O meio de transporte mais recomendado para a integração terrestre em'+
        'países de dimensões continentais que enfrentam longas distâncias, diversidades climáticas e'+
        'obstáculos naturais é:');
      } catch (error) {
        Alert.alert(error)
      }      
    }
  }

  componentDidMount(){
    this.InserirDados();
  }

  render(){

    const { navigation } = this.props;

    return(
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Quiz" navigation={navigation}/>
        <View style={styles.container}>
            <TouchableOpacity style={{padding: 20, borderRadius: 10, width: "50%", backgroundColor:"blue",
            marginBottom: 10, alignItems: "center"}}
            onPress={() => navigation.navigate('Categorias')}>
              <Text style={{fontSize: 20, color: "#FFFFFF"}}>Ir para Categorias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 20, borderRadius: 10, width: "50%", backgroundColor:"gray",
            alignItems: "center"}}
            onPress={() => AsyncStorage.clear()}>
              <Text style={{fontSize: 20, color: "#FFFFFF"}}>Apagar Dados</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F6F6"
  }
})
