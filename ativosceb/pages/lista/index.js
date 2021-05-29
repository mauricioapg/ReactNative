import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';

import CustomHeader from "../../components/CustomHeader";

export default function({props}){
  const route = useRoute();
  const navigation = useNavigation();  
  return <Lista {...props} navigation={navigation} route={route} />
};

class Lista extends Component{
  constructor(){
    super();
    this.state = {
      dados: [],
      dadosLocal: {
        descLocal: ''
      },
      dadosCategoria: {
        descCategoria: ''
      },
      dadosPiso: {
        descPiso: ''
      },
      dadosFabricante: {
        descFabricante: ''
      },
      parametroIdAtivo: ''
    }
  }

  buscarDados(){
    const { route } = this.props;
    var id = route.params.id
    fetch("http://192.168.1.162/ativosceb/api/ativo?id" + route.params.parametro + "=" + id)
    .then(res => res.json())
    .then(data => {
        this.setState({
            dados: data
        })
    })
  }

  /*buscarDescricaoLocal = (id) => {
    fetch("http://192.168.1.162/ativosceb/api/local/" + id)
    .then(res => res.json())
    .then(data => {this.setState({dadosLocal: data})
    })
  }*/

  buscarDescricoes = (idLocal, idPiso, idFabricante, idCategoria) => {
    fetch("http://192.168.1.162/ativosceb/api/local/" + idLocal)
    .then(res => res.json())
    .then(data => {this.setState({dadosLocal: data})
    })

    fetch("http://192.168.1.162/ativosceb/api/piso/" + idPiso)
    .then(res => res.json())
    .then(data => {this.setState({dadosPiso: data})
    })

    fetch("http://192.168.1.162/ativosceb/api/fabricante/" + idFabricante)
    .then(res => res.json())
    .then(data => {this.setState({dadosFabricante: data})
    })

    fetch("http://192.168.1.162/ativosceb/api/categoria/" + idCategoria)
    .then(res => res.json())
    .then(data => {this.setState({dadosCategoria: data})
    })
  }

componentDidMount(){
  this.buscarDados();
  //this.buscarDescricaoLocal(this.state.parametroIdAtivo)
  //Alert.alert('Descrição', this.state.dadosLocal.descLocal) 
}

  render(){
  
  const { navigation } = this.props;
  const { route } = this.props;

  return(
      <ScrollView>
        <CustomHeader title="Lista" navigation={navigation}/>
        <View style={styles.container}>
        <FlatList
          data={this.state.dados}      
          renderItem = {({item}) => (
            <View style={{padding: 10}}>
              <Text>Item:</Text>
              <TouchableOpacity
              onPressIn={() => this.buscarDescricoes(item.idLocal, item.idPiso, item.idFabricante, item.idCategoria)}
              onPress={() => navigation.navigate('Detalhes', {screen:"Detalhes", 
              params:{ id: item.idAtivo,
              item: item.item,
              descLocal: this.state.dadosLocal.descLocal,
              descPiso: this.state.dadosPiso.descPiso,
              descFabricante: this.state.dadosFabricante.descFabricante,
              descCategoria: this.state.dadosCategoria.descCategoria,
              modelo: item.modelo,
              serviceTag: item.serviceTag,
              numeroSerie: item.numeroSerie,
              patrimonio: item.patrimonio,
              dataRegistro: item.dataRegistro,
              comentarios: item.comentarios }})}>
                <Text style={{fontSize: 20}}>{item.item}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor = {(index) => {return index}}
          />
        </View>
      </ScrollView>
    );
  }
}

/*
onPress={() => navigation.navigate('Detalhes', {screen:"Detalhes", 
              params:{ id: item.idAtivo,
              item: item.item,
              descLocal: this.buscarDescricaoLocal(item.idAtivo),
              //idLocal: item.idLocal,
              //idFabricante: item.idFabricante,
              //idCategoria: item.idCategoria,
              //idPiso: item.idPiso,
              modelo: item.modelo,
              serviceTag: item.serviceTag,
              numeroSerie: item.numeroSerie,
              patrimonio: item.patrimonio,
              dataRegistro: item.dataRegistro,
              comentarios: item.comentarios }})}>{item.item}</Text>
*/

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#F8F6F6"
  },
  painelAtivos:{
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 10,
    width: "47%",
    height: 110,
    marginRight: "2%"
  },
  painelDescontinuados:{
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 10,
    width: "47%",
    height: 110
  },
  txtQtdeAtivos:{
    fontSize: 35,
    color: "blue",
    padding: 10
  },
  txtQtdeDescontinuados:{
    fontSize: 35,
    color: "red",
    padding: 10
  },
  painelFiltros:{
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    width: "96%",
    height: 420,
    marginTop: 10,
    alignSelf: "center"
  },
  btnFiltros:{
    alignSelf: "center",
    width: "99%",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "darkgray",
    marginBottom: 10
  },
  labelFiltros:{
    fontSize: 17,
    alignSelf: "center"
  }
})


