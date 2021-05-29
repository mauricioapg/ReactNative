import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomHeader from "../../components/CustomHeader";

export default function(){
  const navigation = useNavigation();  
  return < Home navigation={navigation}/>
};

class Home extends Component{
  constructor(){
    super();
    this.state = {
      teste: 'teste'
    }
  }

  render(){

    const { navigation } = this.props;

    return(
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Home" navigation={navigation}/>
        <View style={styles.container}>          
            <Image style={{}} source={require('./logo_fundo_home.png')} />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F6F6"
  },
})
