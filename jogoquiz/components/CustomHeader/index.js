import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CustomHeader({title, navigation}){
  let categoriaAtual = ''
  if(global.Parametro == 'h'){
    categoriaAtual = 'História'
  }
  else if(global.Parametro == 'g'){
    categoriaAtual = 'Geografia'
  }
    return(
      <View style={{flexDirection: "row", height: 50, backgroundColor: "#0378FF"}}>
        <View style={{flex: 1, marginTop: 12}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={{}} source={require('../../images/icone_menu.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 4, alignItems: "center"}}>
          <Text style={{color: "#FFFFFF", flex: 1,
          marginTop: 10, fontSize: 22, fontWeight: "bold"}}>{title + " - " + categoriaAtual}</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    )
  }