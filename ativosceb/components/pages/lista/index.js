import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';

export default function({props}){
  const route = useRoute();
  const navigation = useNavigation();  
  return < ListaAtivos {...props} navigation={navigation} route={route} />
};

class ListaAtivos extends Component{
  constructor(){
    super();
    this.state = {
      dados: []
    }
  }

  buscarDados(){
    fetch("http://192.168.1.162/ativosceb/api/categoria")
    .then(res => res.json())
    .then(data => {
        this.setState({
            dados: data
        })
    })
}

/*buscarDados(parametro){
    fetch("https://economia.awesomeapi.com.br/json/daily/" + parametro + "/15")
    .then(res => res.json())
    .then(data => {
        this.setState({
            dados: data
        })
    })
}*/

componentDidMount(){
  this.buscarDados();
}

  render(){

  const { navigation } = this.props;
  const { route } = this.props;  

  return(
      <ScrollView>
        <View style={styles.container}>
        <FlatList
          data={this.state.dados}      
          renderItem = {({item}) => (
            <View style={{padding: 10}}>
              <Text>Item:</Text>
              <Text style={{fontSize: 20}}
              onPress={() => Alert.alert(item.descCategoria)}>{item.descCategoria}</Text>
            </View>
          )}
          keyExtractor = {(index) => {return index}}
          />  
        </View>
      </ScrollView>
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



/*import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
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

export default function({props}){
  const navigation = useNavigation();  
  return < Ativos navigation={navigation} />
};

class Ativos extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render(){

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Ativos</Text>
    </View>
    </TouchableWithoutFeedback>
    )
  }
}*/


