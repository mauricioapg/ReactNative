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
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Alert,
  FlatList,
  AsyncStorage,
  Image
} from 'react-native';

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
      texto1: '',
      texto2: '',
      texto3: '',
      texto4: '',
      texto5: '',
      texto6: '',
      texto7: 'Evitar açúcar e alimentos processados'
    }
  }

  escolherDicas(){
    if(global.resultado == "abaixo"){
      this.setState({texto1: 'Invista em um prato equilibrado e variado'})
      this.setState({texto2: 'Corte os alimentos industrializados'})
      this.setState({texto3: 'Coma devagar e mastigue bem'})
      this.setState({texto4: 'Beba bastante água'})
      this.setState({texto5: 'Pratique exercícios físicos'})
      this.setState({texto6: 'Sem exageros aos finais de semana'})
    }
    else{
      this.setState({texto1: 'Consumir mais caloria do que gasta'})
      this.setState({texto2: 'Não pular refeições'})
      this.setState({texto3: 'Consumir mais proteínas'})
      this.setState({texto4: 'Consumir gorduras boas'})
      this.setState({texto5: 'Beba bastante água'})
      this.setState({texto6: 'Consumir ao menos 2 frutas por dia'})
    }
  }

  componentDidMount(){
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('focus', () => {
      this.escolherDicas();
    });
  }

  componentWillUnmount() {
    //Remove o listener ao desmontar
    this.focusListener.remove();
  }

  render(){

    const { route } = this.props;
    const { navigation } = this.props;

    return(
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>        
            <View style={styles.container}>
              <View style={{flexDirection: "row", padding: 20, backgroundColor: '#CFFCE6', borderRadius: 10, margin: 3}}>
                 <View style={{}}>
                    {global.resultado == "abaixo" ?
                    <Image style={{}} source={require('../../images/prato_saudavel_icone.png')} /> 
                    : <Image style={{}} source={require('../../images/calorias_icone.png')} />}
                 </View>
                 <View style={{}}>
                    <Text style={{fontSize: 15, marginLeft: 10}}>{this.state.texto1}</Text>
                 </View>
              </View>
              <View style={{flexDirection: "row", padding: 20, backgroundColor: '#B2E9CE', borderRadius: 10, margin: 3}}>
                 <View style={{}}>
                    {global.resultado == "abaixo" ?
                    <Image style={{}} source={require('../../images/alimentos_industrializados_icone.png')} /> 
                    : <Image style={{}} source={require('../../images/refeicao_icone.png')} />}
                 </View>
                 <View style={{}}>
                    <Text style={{fontSize: 15, marginLeft: 10}}>{this.state.texto2}</Text>
                 </View>
              </View>
              <View style={{flexDirection: "row", padding: 20, backgroundColor: '#CFFCE6', borderRadius: 10, margin: 3}}>
                 <View style={{}}>
                    {global.resultado == "abaixo" ?
                    <Image style={{}} source={require('../../images/coma_devagar_icone.png')} /> 
                    : <Image style={{}} source={require('../../images/proteinas_icone.png')} />}
                 </View>
                 <View style={{}}>
                    <Text style={{fontSize: 15, marginLeft: 10}}>{this.state.texto3}</Text>
                 </View>
              </View>
              <View style={{flexDirection: "row", padding: 20, backgroundColor: '#B2E9CE', borderRadius: 10, margin: 3}}>
                 <View style={{}}>
                    {global.resultado == "abaixo" ?
                    <Image style={{}} source={require('../../images/beba_agua_icone.png')} /> 
                    : <Image style={{}} source={require('../../images/gorduras_boas_icone.png')} />}
                 </View>
                 <View style={{}}>
                    <Text style={{fontSize: 15, marginLeft: 10}}>{this.state.texto4}</Text>
                 </View>
              </View>
              <View style={{flexDirection: "row", padding: 20, backgroundColor: '#CFFCE6', borderRadius: 10, margin: 3}}>
                 <View style={{}}>
                    {global.resultado == "abaixo" ?
                    <Image style={{}} source={require('../../images/exercicios_icone.png')} /> 
                    : <Image style={{}} source={require('../../images/beba_agua_icone.png')} />}
                 </View>
                 <View style={{}}>
                    <Text style={{fontSize: 15, marginLeft: 10}}>{this.state.texto5}</Text>
                 </View>
              </View>
              <View style={{flexDirection: "row", padding: 20, backgroundColor: '#B2E9CE', borderRadius: 10, margin: 3}}>
                 <View style={{}}>
                    {global.resultado == "abaixo" ?
                    <Image style={{}} source={require('../../images/comer_exagero_icone.png')} /> 
                    : <Image style={{}} source={require('../../images/frutas_icone.png')} />}
                 </View>
                 <View style={{}}>
                    <Text style={{fontSize: 15, marginLeft: 10}}>{this.state.texto6}</Text>
                 </View>
              </View>
              {global.resultado == "abaixo" ?
              <View style={{flexDirection: "row", padding: 20, backgroundColor: '#CFFCE6', borderRadius: 10, margin: 3}}>
                 <View style={{}}>
                    <Image style={{marginLeft: 5}} source={require('../../images/acucar_icone.png')} />
                 </View>
                 <View style={{}}>
                    <Text style={{fontSize: 15, marginLeft: 10}}>{this.state.texto7}</Text>
                 </View>
              </View> : null}
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

<View style={{borderRadius: 10, backgroundColor: '#B1F9CA', margin: 4}}>
                <Text style={{fontSize: 20, color: 'darkblue', padding: 10}}>Melhore sua alimentação</Text>
                <Text style={{fontSize: 15, paddingLeft: 10, paddingRight: 10, textAlign: 'justify'}}>Na dieta para
                engordar, comer pelo menos a cada 3 horas é importante para aumentar o consumo de calorias ao longo
                  do dia e favorecer o ganho de peso. Inclua proteínas em todas as refeições. Isso faz com que os 
                  níveis de aminoácidos no sangue fiquem constantes ao longo do dia, favorecendo uma boa recuperação
                  muscular.</Text>
              </View>
              <View style={{borderRadius: 10, backgroundColor: '#EDDAF4', margin: 4}}>
                <Text style={{fontSize: 20, color: 'darkblue', padding: 10}}>Beba bastante água</Text>
                <Text style={{fontSize: 15, paddingLeft: 10, paddingRight: 10, paddingBottom: 20, textAlign: 'justify'}}>Beber bastante
                água e manter-se bem hidratado é essencial para o ganho de massa muscular, pois a hipertrofia, que
                  o aumento do tamanho das células musculares, só acontece se as células tiverem bastante água para
                  aumentar de volume.</Text>
              </View>
              <View style={{borderRadius: 10, backgroundColor: '#F0FAC8', margin: 4}}>
                <Text style={{fontSize: 20, color: 'darkblue', padding: 10}}>Pratique atividade física</Text>
                <Text style={{fontSize: 15, paddingLeft: 10, paddingRight: 10, paddingBottom: 20, textAlign: 'justify'}}>A importância
                da atividade física para a saúde está diretamente relacionada à melhoria da qualidade de vida, 
                reduzindo consideravelmente os riscos de desenvolvimento de doenças cardiovasculares, diabetes, 
                problemas relacionados a baixa imunidade, além dos transtornos de fundo emocional.</Text>
              </View>           
*/
