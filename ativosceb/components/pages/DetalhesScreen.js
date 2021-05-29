import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, ScrollView, FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';

/*export default function ({props}){
  const route = useRoute();
  const navigation = useNavigation();  
  return <Detalhes {...props} navigation={navigation} route={route}/>
};*/

export default class Detalhes extends Component{
  constructor(props){
    super();
    this.state = {
      teste: 'teste'
    }
  }

componentDidMount(){
  //Alert.alert(teste)
}

render(){

const { route } = this.props;
const { navigation } = this.props;
//const teste = this.props.navigation.getParam("valorBusca", "nenhum"); 

return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.container}>
          <Text>Detalhes</Text>
          <Text>{route.params.teste}</Text>  
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
    );
  }
}

  
/*export default function Detalhes({props}) {
  const route = useRoute();
  const navigation = useNavigation();
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.container}>
          <Text>Detalhes</Text>
          <Text>teste</Text>  
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
    );
  }*/

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


