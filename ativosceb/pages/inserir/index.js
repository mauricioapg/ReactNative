import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomHeader from "../../components/CustomHeader";

export default function Inserir({navigation}){
  return(
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Inserir" navigation={navigation}/>
      <View style={styles.container}>          
          <Text onPress={navigation.navigate('Home')}>Tela Inserir</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#F8F6F6"
  },
})
