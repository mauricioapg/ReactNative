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
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Alert, AsyncStorage, TouchableOpacity, Image } from 'react-native';

//TELAS
import IMC from './pages/IMC';
import Tabela from './pages/Tabela';
import Historico from './pages/Historico';
import Dicas from './pages/Dicas';

//COMPONENTES
import CustomDrawer from "./components/CustomDrawer";

const Stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

function StackIMC(){
  return(
    <Stack.Navigator initialRouteName="IMC">
      <Stack.Screen name="IMC" component={IMC} options={navOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

function StackTabela({navigation}){
  return(
    <Stack.Navigator initialRouteName="Tabela">
      <Stack.Screen name="Tabela" component={Tabela}
          options={{ headerStyle: {backgroundColor: '#1E3525'},
          headerTitleStyle: { color: '#FFFFFF'},
          headerTintColor: "#FFFFFF",
          title: 'IMC de Bolso',
          headerLeft: () => (
            <TouchableOpacity
            onPress={() => navigation.goBack()}>
                <Image style={{marginLeft: 10}} source={require('./images/seta.png')} />
            </TouchableOpacity>
          )
          }}/>
    </Stack.Navigator>
  )
}

function StackHistorico(){
  return(
    <Stack.Navigator initialRouteName="Historico">
      <Stack.Screen name="Historico" component={Historico} options={navOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

function StackDicas({navigation}){
  return(
    <Stack.Navigator initialRouteName="Dicas">
      <Stack.Screen name="Dicas" component={Dicas}
          options={{ headerStyle: {backgroundColor: '#1E3525'},
          headerTitleStyle: { color: '#FFFFFF'},
          headerTintColor: "#FFFFFF",
          title: 'Dicas nutricionais',
          headerLeft: () => (
            <TouchableOpacity
            onPress={() => navigation.goBack()}>
                <Image style={{marginLeft: 10}} source={require('./images/seta.png')} />
            </TouchableOpacity>
          )
          }}/>
    </Stack.Navigator>
  )
}

function StackHistorico(){
  return(
    <Stack.Navigator initialRouteName="Historico">
      <Stack.Screen name="Historico" component={Historico}
          options={{ headerStyle: {backgroundColor: '#1E3525'},
          headerTitleStyle: { color: '#FFFFFF'},
          headerTintColor: "#FFFFFF",
          title: 'IMC de Bolso'}}/>
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="IMC"
      drawerContent={props => CustomDrawer(props)}>
        <Drawer.Screen name="IMC" component={StackIMC} />
        <Drawer.Screen name="Tabela" component={StackTabela} />
        <Drawer.Screen name="Historico" component={StackHistorico} />
        <Drawer.Screen name="Dicas" component={StackDicas} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}




/*const App = () => {

const Stack = createStackNavigator();

return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IMC">
          <Stack.Screen name="IMC" component={IMC}
          options={{ headerStyle: {backgroundColor: '#1E3525'},
          headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF'},
          title: 'Calculadora de IMC'}}  />
          <Stack.Screen name="Tabela" component={Tabela}
          options={{ headerStyle: {backgroundColor: '#1E3525'},
          headerTitleStyle: { color: '#FFFFFF'},
          headerTintColor: "#FFFFFF",
          title: 'Tabela',
              }}/>
          <Stack.Screen name="Historico" component={Historico}
          options={{ headerStyle: {backgroundColor: '#1E3525'},
          headerTitleStyle: { color: '#FFFFFF'},
          headerTintColor: "#FFFFFF",
          title: 'Histórico'          
            }}/>          
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;*/
