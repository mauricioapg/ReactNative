/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';

export default function Menu({navigation}) {
  const dados = [1]
  return (
    <View style={styles.container}>
      <FlatList
          data={dados}      
          renderItem = {({item}) => (
          <View>
            <TouchableOpacity 
              style={styles.btnTela}
              onPress={() => navigation.navigate('Moedas')}>
              <Image style={{}} source={require("./botao_moedas2.png")} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.btnTela}
              onPress={() => navigation.navigate('Cep')}>
              <Image style={{}} source={require("./lupa.png")} />
            </TouchableOpacity>              
          </View>
      )}
      keyExtractor = {(index) => {return index}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#B5ECC7"
  },
  btnTela:{
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#1E3525"
  },
})
