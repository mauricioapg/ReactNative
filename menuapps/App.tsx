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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image
} from 'react-native';

import Menu from './pages/menu';
import Moedas from './pages/moedas';
import Cep from './pages/cep';

const App = () => {

const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={Menu} options={{ headerTitleStyle: { alignSelf: 'center' }, title: 'Menu de Aplicativos' }} />
          <Stack.Screen name="Moedas" component={Moedas} options={{ title: 'Conversor de Moedas' }} />
          <Stack.Screen name="Cep" component={Cep} options={{ title: 'Busca de CEP' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#B5ECC7"
  },
  logo:{
    alignSelf: "center",
    marginBottom: 30,
    color: "#1E3525"
  },
  txtPeso:{
    fontSize: 20,
    marginBottom: 10,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFFFF"

  },
  txtAltura:{
    fontSize: 20,
    marginBottom: 10,
    borderColor: "#FFFFFF",
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  btnCalcular:{
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#1E3525"
  },
  btnLimpar:{
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "#3FB567"
  },
  imc:{
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 30,
    color: "#1E3525",
  },
})

export default App;
