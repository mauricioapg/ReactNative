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
} from 'react-native';

import CustomHeader from "../../components/CustomHeaderHome";

export default function({props}){
  const navigation = useNavigation();  
  return <Categorias navigation={navigation}/>
};

class Categorias extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render(){

    const { navigation } = this.props;

    global.Parametro = ''

    return(
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Quiz" navigation={navigation}/>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.viewBotoes}>
              <TouchableOpacity style={styles.categorias1}
              onPress={() => navigation.navigate('Pergunta')}
              onPressIn={() => global.Parametro = 'h'}>
                <Text style={styles.textoCategorias}>História</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewBotoes}>
              <TouchableOpacity style={styles.categorias2}
              onPress={() => navigation.navigate('Pergunta')}
              onPressIn={() => global.Parametro = 'g'}>
                <Text style={styles.textoCategorias}>Geografia</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewBotoes}>
              <TouchableOpacity style={styles.categorias1}
              onPress={() => {}}>
                <Text style={styles.textoCategorias}>Ciências Biológicas</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewBotoes}>
              <TouchableOpacity style={styles.categorias2}>
                <Text style={styles.textoCategorias}>Matemática</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewBotoes}>
              <TouchableOpacity style={styles.categorias1}>
                <Text style={styles.textoCategorias}>Língua Portuguesa</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewBotoes}>
              <TouchableOpacity style={styles.categorias2}>
                <Text style={styles.textoCategorias}>Física</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewBotoes}>
              <TouchableOpacity style={styles.categorias1}>
                <Text style={styles.textoCategorias}>Química</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewBotoes}>
              <TouchableOpacity style={styles.categorias2}>
                <Text style={styles.textoCategorias}>Artes</Text>
              </TouchableOpacity>
            </View>
            <View style={{width: "100%", alignItems: "center", marginBottom: 4}}>
              <TouchableOpacity style={styles.categorias1}
              onPress={() => {}}>
                <Text style={styles.textoCategorias}>Esportes</Text>
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
  categorias1:{
    marginTop: 4,
    width: "98%",
    padding: 30,
    borderRadius: 10,
    backgroundColor: '#A9D0F5'    
  },
  categorias2:{
    marginTop: 4,
    width: "98%",
    padding: 30,
    borderRadius: 10,
    backgroundColor: '#81BEF7'    
  },
  textoCategorias:{
    fontSize: 20
  },
  viewBotoes:{
    width: "100%",
    alignItems: "center"
  }
})
