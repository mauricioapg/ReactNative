import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default function Inserir(){
  return(
      <View>
          <Text>Tela Inserir</Text>
      </View>
  );
}



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
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#F8F6F6"
  },
})*/
