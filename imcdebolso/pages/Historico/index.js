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
import { useRoute, useNavigation } from '@react-navigation/native';
//import DeviceInfo from 'react-native-device-info';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Alert,
  FlatList,
  AsyncStorage
} from 'react-native';

import {RefreshControl} from 'react-native'
import HeaderHistorico from "../../components/HeaderHistorico";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';

export default function({props}){
  const route = useRoute();
  const navigation = useNavigation();
  return < Lista {...props} route={route} navigation={navigation}/>
};

class Lista extends Component{
  constructor(){
    super();
    this.state = {
      status: false,
      dados: []
    }
  }

  async ExibirDados(){
    if(await AsyncStorage.getAllKeys() == ""){
      this.setState({dados: []})
    }
    else{
      try {
        const array = await AsyncStorage.getAllKeys();
        const results = await AsyncStorage.multiGet(array);
        for(var i=0; i < results.length; i++){
          this.setState({dados: results})
        }
      } catch (error) {
        Alert.alert("Erro ao carregar dados", error);
      }
    }
  }

  componentDidMount(){
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('focus', () => {
      this.ExibirDados();
    });
  }

  componentWillUnmount() {
    // Remove o listener ao desmontar
    this.focusListener.remove();
  }

  render(){

    const { route } = this.props;
    const { navigation } = this.props;

    return(
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <HeaderHistorico title="IMC de Bolso" navigation={navigation}/>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>        
            <View style={styles.container}>
                {this.state.dados.map((data) => {
                return <View style={{padding: 5}}>
                  <Text style={{fontSize: 12, fontWeight: "bold", color: "darkgreen"}}>Dados:</Text>
                  <Text style={{fontSize: 17, paddingBottom: 15}}>{data[1]}</Text>
                </View>
              })}          
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
    //alignItems: "center",
    backgroundColor: "#F8F6F6"
  },
  label:{
    fontSize: 20,
  }
})

/*
await AsyncStorage.getAllKeys().then(async keys => {
        await AsyncStorage.multiGet(keys).then(key => {
          key.forEach(data => {
            this.setState({dados: data})
            Alert.alert(data.map(data[1].toString(), i, data))
          });
        });
      });
    } catch (error) {
      Alert.alert("Couldn't load data", error);
    }



    <FlatList
                data={this.state.dados}      
                renderItem = {({item}) => (
                <View style={{marginTop: 10}}>
                    <Text style={styles.label}>{item}</Text>             
                </View>
              )}
              keyExtractor = {(index) => {return index}}
              />
*/
