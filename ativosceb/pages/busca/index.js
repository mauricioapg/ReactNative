import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  TextInput,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler';

import CustomHeader from "../../components/CustomHeader";

export default function({props}){
  const navigation = useNavigation();  
  return <Busca {...props} navigation={navigation}/>
};

class Busca extends Component{
  constructor(){
    super();
    this.state = {
      patrimonio: false,
      numeroSerie: false,
      serviceTag: false,
      placeholder: "",
      parametro: false,
      visible: false,
      valorBusca: "",
      dadosAtivo: {
        idAtivo: '',
        item: '',
        idLocal: '',
        idCategoria: '',
        idPiso: '',
        idFabricante: '',
        modelo: '',
        serviceTag: '',
        numeroSerie: '',
        patrimonio: '',
        dataRegistro: '',
        comentarios: ''
      },
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
      }
    }
  }

  render(){

    const buscarDescricaoLocal = () => {
      fetch("http://192.168.1.162/ativosceb/api/local/" + this.state.dadosAtivo.idLocal)
      .then(res => res.json())
      .then(data => {this.setState({dadosLocal: data})
      })
    }

    const buscarDados = () => {
      this.setState({teste: 'parâmetro teste'})
      if(this.state.valorBusca == ""){
        Alert.alert('Informação', "Digite um valor para a busca")
        this.setState({visible: false})
      }
      else if(this.state.parametro == ""){
        Alert.alert('Informação', "Escolha um parâmetro para a busca")
        this.setState({visible: false})
      }
      else{
          fetch("http://192.168.1.162/ativosceb/api/ativo?" + this.state.parametro + "=" + this.state.valorBusca)
          .then(res => res.json())
          .then(data => {this.setState({dadosAtivo: data})
        })
          fetch("http://192.168.1.162/ativosceb/api/local/" + this.state.dadosAtivo.idLocal)
          .then(res => res.json())
          .then(data => {this.setState({dadosLocal: data})
        })
        fetch("http://192.168.1.162/ativosceb/api/categoria/" + this.state.dadosAtivo.idCategoria)
          .then(res => res.json())
          .then(data => {this.setState({dadosCategoria: data})
        })
        fetch("http://192.168.1.162/ativosceb/api/piso/" + this.state.dadosAtivo.idPiso)
          .then(res => res.json())
          .then(data => {this.setState({dadosPiso: data})
        })
        fetch("http://192.168.1.162/ativosceb/api/fabricante/" + this.state.dadosAtivo.idFabricante)
          .then(res => res.json())
          .then(data => {this.setState({dadosFabricante: data})
        })
        this.setState({visible: true})
      }
    }
    
    const HabilitarFiltros = () => {
      this.setState({numeroSerie: false});
      this.setState({serviceTag: false});
      this.setState({patrimonio: false});
      if(this.state.patrimonio == true){
        this.setState({numeroSerie: false});
        this.setState({serviceTag: false});        
      }
      else if(this.state.numeroSerie == true){
        this.setState({patrimonio: false});
        this.setState({serviceTag: false});
      }
      else if(this.state.serviceTag == true){
        this.setState({patrimonio: false});
        this.setState({numeroSerie: false});
      }
    }

    const DefinirPlaceholder = () => {
      var placeholder
      if(this.state.patrimonio == true){
        placeholder = "Digite o patrimônio"
      }
      else if(this.state.numeroSerie == true){
        placeholder = "Digite o Nº de Série"
      }
      else if(this.state.serviceTag == true){
        placeholder = "Digite a Service Tag"
      }
      return placeholder
    }

    const { navigation } = this.props;

    return(
      <TouchableWithoutFeedback>
        <ScrollView>
        <CustomHeader title="Busca avançada" navigation={navigation}/>
          <View style={styles.container}>
            <View style={styles.painelFiltroBuscaAvancada}>
              <View style={{padding: 10, marginLeft: 10}}>
                <View>
                  <Text style={{fontSize: 15, marginBottom: 20}}>Filtros</Text>
                </View>
                <View style={{alignSelf: "center"}}>
                  <View style={{flexDirection: "row"}}>
                    <TouchableHighlight style={[styles.btnFiltroBuscaAvancada,
                      this.state.patrimonio ? {backgroundColor: "#007792"}:{}]}
                      onPress={() => this.setState({patrimonio: true})}
                      onShowUnderlay={() => HabilitarFiltros()}
                      onPressIn={() => this.setState({parametro: "patrimonio"})}>
                        <Text style={[styles.labelFiltroBuscaAvancada,
                        this.state.patrimonio ? {color: "#FFFFFF"}:{}]}>Patrimônio</Text>
                      </TouchableHighlight>
                      <TouchableHighlight style={[styles.btnFiltroBuscaAvancada,
                      this.state.numeroSerie ? {backgroundColor: "#007792"}:{}]}
                      onPress={() => this.setState({numeroSerie: true})}
                      onShowUnderlay={() => HabilitarFiltros()}
                      onPressIn={() => this.setState({parametro: "numeroSerie"})}>
                        <Text style={[styles.labelFiltroBuscaAvancada,
                        this.state.numeroSerie ? {color: "#FFFFFF"}:{}]}>Nº de Série</Text>
                      </TouchableHighlight>
                      <TouchableHighlight style={[styles.btnFiltroBuscaAvancada,
                      this.state.serviceTag ? {backgroundColor: "#007792"}:{}]}
                      onPress={() => this.setState({serviceTag: true})}
                      onShowUnderlay={() => HabilitarFiltros()}
                      onPressIn={() => this.setState({parametro: "serviceTag"})}>
                        <Text style={[styles.labelFiltroBuscaAvancada,
                        this.state.serviceTag ? {color: "#FFFFFF"}:{}]}>Service Tag</Text>
                      </TouchableHighlight>
                  </View>
                </View>
              </View>              
            </View>
            <View style={styles.painelBusca}>
              <View style={{padding: 20}}>
                <Text style={{fontSize: 15, marginBottom: 20}}>Busca</Text>
                  <TextInput style={styles.txtParametroBusca}
                  value={this.state.valorBusca}
                  onChangeText={valorBusca => this.setState({valorBusca})}
                  placeholder= {DefinirPlaceholder()}/>
                  <TouchableOpacity style={styles.btnBusca}
                  onPress={() => buscarDados()}>
                    <Text style={styles.labelBusca}>Buscar</Text>
                  </TouchableOpacity>
              </View>
              <View style={{padding: 25}}>
                <FlatList
                data={this.state.dados}      
                renderItem = {({item}) => (
                  <View style={{padding: 10}}>
                    <Text>Item:</Text>
                    <Text style={{fontSize: 15, marginTop: 5}}
                    onPress={() => {}}>{item.code}</Text>
                  </View>
                )}
                keyExtractor = {(index) => {return index}}
                />
                {this.state.visible ?
                  <TouchableOpacity style={{backgroundColor: "#E6E6E6", padding: 5}}
                  onPress={() => navigation.navigate('Detalhes', {screen:"Detalhes",
                  params:
                  { id: this.state.dadosAtivo.idAtivo,
                  item: this.state.dadosAtivo.item,
                  descLocal: this.state.dadosLocal.descLocal,
                  descCategoria: this.state.dadosCategoria.descCategoria,
                  descPiso: this.state.dadosPiso.descPiso,
                  descFabricante: this.state.dadosFabricante.descFabricante,
                  modelo: this.state.dadosAtivo.modelo,
                  serviceTag: this.state.dadosAtivo.serviceTag,
                  numeroSerie: this.state.dadosAtivo.numeroSerie,
                  patrimonio: this.state.dadosAtivo.patrimonio,
                  dataRegistro: this.state.dadosAtivo.dataRegistro,
                  comentarios: this.state.dadosAtivo.comentarios}})}>
                    <Text style={{marginLeft: 5}}>Item:</Text>
                    <Text style={{fontSize: 20, padding: 5}}>
                    {this.state.dadosAtivo.item}
                    </Text>
                    <Text style={{fontSize: 15, padding: 5}}>
                    {this.state.dadosLocal.descLocal}
                    </Text>
                  </TouchableOpacity>
                : null}
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
  painelFiltroBuscaAvancada:{
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    height: 120,
    width: "96%",
    marginTop: 10,
    alignSelf: "center"
  },
  painelBusca:{
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    width: "96%",
    height: 360,
    marginTop: 10,
    alignSelf: "center"
  },
  btnFiltroBuscaAvancada:{
    width: "95%",
    padding: 7,
    borderRadius: 15,
    backgroundColor: "#A4A4A4",
    marginRight: 10,
  },
  labelFiltroBuscaAvancada:{
    fontSize: 15,
    alignSelf: "center"
  },
  txtParametroBusca:{
    fontSize: 15,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5
  },
  btnBusca:{
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#007792"
  },
  labelBusca:{
    fontSize: 20,
    alignSelf: "center",
    color: "#FFFFFF"
  },
})

