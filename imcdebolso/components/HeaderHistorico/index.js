import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage, Alert, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HeaderHistorico({title, navigation}){

  const [verificador, setVerificador] = useState(false);
  const [cor, setCor] = useState('');
  
  const apagar = async () => {
    AsyncStorage.clear();
    ToastAndroid.show('Histórico apagado', ToastAndroid.SHORT)
    navigation.navigate('IMC')
  }

  const desabilitarBotaoLimpar = async () => {
    if(await AsyncStorage.getAllKeys() == ""){
      setVerificador(true)
      setCor('#69766A')
      return true;
    }
    else{
      setVerificador(false)
      setCor('#FFFFFF')
      return false;
    }
  }

  const LimparHistorico = () => {
    Alert.alert(
      'Aviso',
      'Deseja mesmo apagar o histórico?',
      [
        {text: 'Sim', onPress: () => apagar()},
        {text: 'Não', onPress: () => {}},
      ]
    )
  }
    return(
      <View style={{flexDirection: "row", height: 50, width: "100%", backgroundColor: "#1E3525"}}>
        <View style={{marginTop: 10, width: "15%"}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={{}} source={require('../../images/icone_menu.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{width: "68%", alignItems: "center"}}>
          <Text style={{color: "#FFFFFF", flex: 1, marginTop: 10, fontSize: 20}}>{title}</Text>
        </View>
        <View style={{marginTop: 10, width: "17%"}}>
          {desabilitarBotaoLimpar() == true ?
          <TouchableOpacity disabled={verificador} onPress={() => LimparHistorico()}>
            <Text style={{color: cor, marginTop: 5, fontSize: 15}}>Limpar</Text>
          </TouchableOpacity>
            :
          <TouchableOpacity disabled={verificador} onPress={() => LimparHistorico()}>
            <Text style={{color: cor, marginTop: 5, fontSize: 15}}>Limpar</Text>
          </TouchableOpacity>
          }
        </View>
      </View>
    )
  }