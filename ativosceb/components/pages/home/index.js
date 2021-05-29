import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

/*export default function(){
  const navigation = useNavigation();  
  return < Home navigation={navigation}/>
};

export default class Home extends Component{
  static navigationOptions = {
    drawerLabel: "Home",
  }

  render(){
    return(
      <View>
        <Text>Deu certo!</Text>
      </View>
    )
  }
}*/

export default function Home(){
    return(
        <View style={styles.container}>
            <Image style={{}} source={require('./logo_fundo_home.png')} />
        </View>
    );
}


/*import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

export default function({props}){
  const navigation = useNavigation();  
  return < Home navigation={navigation} />
};

class Home extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render(){

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Home</Text>
    </View>
    </TouchableWithoutFeedback>
    )
  }
}*/

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F6F6"
  },
})
