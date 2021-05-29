import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, ScrollView, FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import CustomHeader from "../../components/CustomHeader";

export default function (){
  const route = useRoute();
  const navigation = useNavigation();  
  return <Detalhes navigation={navigation} route={route}/>
};

class Detalhes extends Component{
  constructor(){
    super();
    this.state = {
      teste: 'teste',
      serviceTag: ''
    }
  }

componentDidMount(){
  //Alert.alert(teste)
}

render(){

const { route } = this.props;
const { navigation } = this.props;

const verificadorServiceTag = () => { 
  var serviceTag = '' 
  if(route.params.serviceTag == ""){
    serviceTag = "(não tem)"
  }else{
    serviceTag = route.params.serviceTag
  }
  return serviceTag;
}

const verificadorNumeroSerie = () => { 
  var numeroSerie = '' 
  if(route.params.numeroSerie == ""){
    numeroSerie = "(não tem)"
  }else{
    numeroSerie = route.params.numeroSerie
  }
  return numeroSerie;
}

return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
      <CustomHeader title="Detalhes" navigation={navigation}/>
        <View style={styles.container}>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <View style={styles.painel}>
              <Text style={{fontSize: 15}}>ID:</Text>
              <Text style={{fontSize: 20}}>{route.params.id}</Text>
              <Text style={{marginTop: 20, fontSize: 15}}>Item:</Text>
              <Text style={{fontSize: 20}}>{route.params.item}</Text>
              <Text style={{marginTop: 20, fontSize: 15}}>Categoria:</Text>
              <Text style={{fontSize: 20}}>{route.params.descCategoria}</Text>
              <Text style={{marginTop: 20, fontSize: 15}}>Fabricante:</Text>
              <Text style={{fontSize: 20}}>{route.params.descFabricante}</Text>
              <Text style={{marginTop: 20, fontSize: 15}}>Modelo:</Text>
              <Text style={{fontSize: 20}}>{route.params.modelo}</Text>
              <Text style={{marginTop: 20, fontSize: 15}}>Service Tag:</Text>
              <Text style={{fontSize: 20}}>{verificadorServiceTag()}</Text>   
              <Text style={{marginTop: 20, fontSize: 15}}>Nº de Série:</Text>
              <Text style={{fontSize: 20}}>{verificadorNumeroSerie()}</Text>   
              <Text style={{marginTop: 20, fontSize: 15}}>Local:</Text>
              <Text style={{fontSize: 20}}>{route.params.descLocal}</Text>
              <Text style={{marginTop: 20, fontSize: 15}}>Piso:</Text>
              <Text style={{fontSize: 20}}>{route.params.descPiso}</Text>
              <Text style={{marginTop: 20, fontSize: 15}}>Patrimônio:</Text>
              <Text style={{fontSize: 20}}>{route.params.patrimonio}</Text>
              <Text style={{marginTop: 20, fontSize: 15}}>Data de Registro:</Text>
              <Text style={{fontSize: 20}}>{route.params.dataRegistro}</Text>
              <Text style={{marginTop: 20, fontSize: 15}}>Comentários:</Text>
              <Text style={{fontSize: 20}}>{route.params.comentarios}</Text>                           
            </View>
          </View>         
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#F8F6F6"
  },
  painel:{
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 10,
    width: "97%",
    height: 900,
    borderWidth: 1
  }
})


