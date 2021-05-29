import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CustomHeader({title, navigation}){
    return(
      <View style={{flexDirection: "row", height: 50, backgroundColor: "#1E3525"}}>
        <View style={{flex: 1, marginTop: 10}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={{}} source={require('../../images/icone_menu.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 4, alignItems: "center"}}>
          <Text style={{color: "#FFFFFF", flex: 1, marginTop: 10, fontSize: 20}}>{title}</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    )
  }