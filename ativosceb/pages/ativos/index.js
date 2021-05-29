import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, Alert, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import CustomHeader from "../../components/CustomHeader";

export default function({props}){
  const navigation = useNavigation();  
  return <Ativos navigation={navigation} />
};

class Ativos extends Component{
  constructor(){
    super();
    this.state = {
      statusPiso: false,
      statusFabricante: false,
      statusCategoria: false,
      statusLocal: false,
      fabricanteSelecionado: "",
      localSelecionado: "",
      pisoSelecionado: "",
      categoria: [],
      categoriaSelecionada: "",
      moeda: "",
      dadosCategoria: [],
      dadosLocal: [],
      dadosFabricante: [],
      dadosPiso: [],
      qtdeAtivos: [1, 2, 3, 4],
      qtdeDescontinuados: []
    }
  }

buscarAtivos(){
    fetch("http://192.168.1.162/ativosceb/api/ativo?condicao=Em%20uso")
    .then(res => res.json())
    .then(res => {this.setState({qtdeAtivos: res})})
}

buscarDescontinuados(){
  fetch("http://192.168.1.162/ativosceb/api/ativo?condicao=Descontinuado")
  .then(res => res.json())
  .then(res => {this.setState({qtdeDescontinuados: res})})
}

buscarDadosCategoria(){
    fetch("http://192.168.1.162/ativosceb/api/categoria")
    .then(res => res.json())
    .then(res => {this.setState({dadosCategoria: res})})
}

buscarDadosFabricante(){
  fetch("http://192.168.1.162/ativosceb/api/fabricante")
  .then(res => res.json())
  .then(res => {this.setState({dadosFabricante: res})})
}

buscarDadosLocal(){
  fetch("http://192.168.1.162/ativosceb/api/local")
  .then(res => res.json())
  .then(res => {this.setState({dadosLocal: res})})
}

buscarDadosPiso(){
  fetch("http://192.168.1.162/ativosceb/api/piso")
  .then(res => res.json())
  .then(res => {this.setState({dadosPiso: res})})
}

componentDidMount(){
  this.buscarAtivos();
  this.buscarDescontinuados();
  this.buscarDadosCategoria();
  this.buscarDadosFabricante();
  this.buscarDadosLocal();
  this.buscarDadosPiso();        
}

trocarStatusPiso(){
  if(this.state.statusPiso == false){
    this.setState({statusPiso: true})
  }
  else{
    this.setState({statusPiso: false})
  }
}

trocarStatusFabricante(){
  if(this.state.statusFabricante == false){
    this.setState({statusFabricante: true})
  }
  else{
    this.setState({statusFabricante: false})
  }
}

trocarStatusCategoria(){
  if(this.state.statusCategoria == false){
    this.setState({statusCategoria: true})
  }
  else{
    this.setState({statusCategoria: false})
  }
}

trocarStatusLocal(){
  if(this.state.statusLocal == false){
    this.setState({statusLocal: true})
  }
  else{
    this.setState({statusLocal: false})
  }
}

  render(){

  const { navigation } = this.props;

    return(
      <TouchableWithoutFeedback>
        <ScrollView>
        <CustomHeader title="Detalhes" navigation={navigation}/>
          <View style={styles.container}>
              <View style={{flexDirection: "row", marginTop: 10, alignSelf: "center"}}>
                <View style={styles.painelAtivos}>
                    <Text style={{fontSize: 15}}>Total de ativos</Text>
                    <Text style={styles.txtQtdeAtivos}>{this.state.qtdeAtivos.length.toString()}</Text>  
                </View>
                <View style={styles.painelDescontinuados}>
                  <Text style={{fontSize: 15}}>Descontinuados</Text>
                    <Text style={styles.txtQtdeDescontinuados}>{this.state.qtdeDescontinuados.length.toString()}</Text>
                </View>
              </View>
              <View style={styles.painelFiltros}>
                  <View style={{padding: 10}}>
                    <Text style={{fontSize: 15, marginBottom: 20}}>Filtros</Text>
                    <TouchableOpacity style={styles.btnFiltros}
                    onPress={() => navigation.navigate('Lista')}>
                      <Text style={styles.labelFiltros}>Geral</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnFiltros}
                    onPress={() => {this.trocarStatusFabricante()}}>
                      <Text style={styles.labelFiltros}>Ativos por fabricante</Text>
                    </TouchableOpacity>
                    {this.state.statusFabricante ?
                    <View>
                      <Picker
                      selectedValue={this.state.fabricanteSelecionado}
                      style={{height: 50, width: "100%"}}
                      onValueChange={(itemValue, itemIndex) => this.setState({fabricanteSelecionado: itemValue})}>
                          {this.state.dadosFabricante.map((item, key) => (
                              <Picker.Item label={item.descFabricante} value={item.idFabricante} key={key} />
                          )
                          )}                                                                
                      </Picker>
                      <TouchableOpacity style={styles.btnBuscar}
                      onPress={() => navigation.navigate('Lista', {screen:"Lista", params:{ id: this.state.fabricanteSelecionado,
                      parametro: "Fabricante"}})}>
                        <Text style={styles.labelFiltros}>Buscar</Text>
                      </TouchableOpacity>
                    </View> : null}
                    <TouchableOpacity style={styles.btnFiltros}
                    onPress={() => {this.trocarStatusLocal()}}>
                      <Text style={styles.labelFiltros}>Ativos por local</Text>
                    </TouchableOpacity>
                    {this.state.statusLocal ?
                    <View>
                      <Picker
                      selectedValue={this.state.localSelecionado}
                      style={{height: 50, width: "100%"}}
                      onValueChange={(itemValue, itemIndex) => this.setState({localSelecionado: itemValue})}>
                          {this.state.dadosLocal.map((item, key) => (
                              <Picker.Item label={item.descLocal} value={item.idLocal} key={key} />
                          )
                          )}                                                                
                      </Picker>
                      <TouchableOpacity style={styles.btnBuscar}
                      onPress={() => navigation.navigate('Lista', {screen:"Lista", params:{ id: this.state.localSelecionado,
                      parametro: "Local"}})}>
                        <Text style={styles.labelFiltros}>Buscar</Text>
                      </TouchableOpacity>
                    </View> : null}
                    <TouchableOpacity style={styles.btnFiltros}
                    onPress={() => {this.trocarStatusPiso()}}>
                      <Text style={styles.labelFiltros}>Ativos por piso</Text>
                    </TouchableOpacity>
                    {this.state.statusPiso ?
                    <View>
                      <Picker
                      selectedValue={this.state.pisoSelecionado}
                      style={{height: 50, width: "100%"}}
                      onValueChange={(itemValue, itemIndex) => this.setState({pisoSelecionado: itemValue})}>
                          {this.state.dadosPiso.map((item, key) => (
                              <Picker.Item label={item.descPiso} value={item.idPiso} key={key} />
                          )
                          )}                                                                
                      </Picker>
                      <TouchableOpacity style={styles.btnBuscar}
                      onPress={() => navigation.navigate('Lista', {screen:"Lista", params:{ id: this.state.pisoSelecionado,
                      parametro: "Piso"}})}>
                        <Text style={styles.labelFiltros}>Buscar</Text>
                      </TouchableOpacity>
                    </View> : null}
                    <TouchableOpacity style={styles.btnFiltros}
                    onPress={() => this.trocarStatusCategoria()}>
                      <Text style={styles.labelFiltros}>Ativos por categoria</Text>
                    </TouchableOpacity>
                    {this.state.statusCategoria ?
                    <View>
                      <Picker
                      selectedValue={this.state.categoriaSelecionada}
                      style={{height: 50, width: "100%"}}
                      onValueChange={(itemValue, itemIndex) => this.setState({categoriaSelecionada: itemValue})}>
                          {this.state.dadosCategoria.map((item, key) => (
                              <Picker.Item label={item.descCategoria} value={item.idCategoria} key={key} />
                          )
                          )}                                                                
                      </Picker>
                      <TouchableOpacity style={styles.btnBuscar}
                      onPress={() => navigation.navigate('Lista', {screen:"Lista", params:{ id: this.state.categoriaSelecionada,
                      parametro: "Categoria"}})}>
                        <Text style={styles.labelFiltros}>Buscar</Text>
                      </TouchableOpacity>
                  </View> : null}
                  </View>              
              </View>  
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}
//onPress={() => navigation.navigate('Lista', {screen:"Lista", params:{ data: this.state.categoriaSelecionada}})}
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
    height: 600,
    marginTop: 10,
    alignSelf: "center"
  },
  btnFiltros:{
    alignSelf: "center",
    width: "99%",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#A4A4A4",
    marginBottom: 10
  },
  labelFiltros:{
    fontSize: 17,
    alignSelf: "center"
  },
  btnBuscar:{
    alignSelf: "center",
    width: "99%",
    padding: 7,
    borderRadius: 5,
    backgroundColor: "#01DFD7",
    marginBottom: 10
  },
})


