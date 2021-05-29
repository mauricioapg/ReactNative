import * as React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

//TELAS
import HomeScreen from "./pages/home";
import AtivosScreen from "./pages/ativos";
import ListaScreen from "./pages/lista";
import BuscaScreen from "./pages/busca";
import InserirScreen from "./pages/inserir";
import DetalhesScreen from "./pages/detalhes";

//COMPONENTES
import CustomDrawer from "./components/CustomDrawer";

const Stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

function StackHome(){
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={navOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

function StackInserir(){
  return(
    <Stack.Navigator initialRouteName="Inserir">
      <Stack.Screen name="Inserir" component={InserirScreen} options={navOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

function StackAtivos(){
  return(
    <Stack.Navigator initialRouteName="Ativos">
      <Stack.Screen name="Ativos" component={AtivosScreen} options={navOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

function StackBusca(){
  return(
    <Stack.Navigator initialRouteName="Busca">
      <Stack.Screen name="Busca" component={BuscaScreen} options={navOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

function StackLista(){
  return(
    <Stack.Navigator initialRouteName="Lista">
      <Stack.Screen name="Lista" component={ListaScreen} options={navOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

function StackDetalhes(){
  return(
    <Stack.Navigator initialRouteName="Detalhes">
      <Stack.Screen name="Detalhes" component={DetalhesScreen} options={navOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
      drawerContent={props => CustomDrawer(props)}>
        <Drawer.Screen name="Home" component={StackHome} />
        <Drawer.Screen name="Inserir" component={StackInserir} />
        <Drawer.Screen name="Ativos" component={StackAtivos} />
        <Drawer.Screen name="Busca" component={StackBusca} />
        <Drawer.Screen name="Lista" component={StackLista} />
        <Drawer.Screen name="Detalhes" component={StackDetalhes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//const Tab = createBottomTabNavigator();

/*function TabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Tela1" component={StackTela1} />
      <Tab.Screen name="Tela2" component={StackTela2} />
    </Tab.Navigator>
  )
}*/

/*function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}*/

/*function Tela1Screen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Tela 1" navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TELA 1</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Detalhes', {screen:"Detalhes", params:{ data:"Consegui!"}})}>
          <Text style={{backgroundColor: "orange", color: "white"}}>Ir para detalhes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Tela2Screen({navigation, route}) {
  const {data} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Tela 2" navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TELA 2</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{backgroundColor: "orange", color: "white"}}>Ir para tela 1</Text>
        </TouchableOpacity>
        <Text>{data}</Text>
      </View>
    </SafeAreaView>
  );
}*/


////////////////////////////////////////////////////////////////////////////

/*export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Ativos" component={AtivosScreen} />
        <Tab.Screen name="Lista" component={ListaScreen} />
        <Tab.Screen name="Busca" component={BuscaScreen} />
        <Tab.Screen name="Inserir" component={InserirScreen} />
        <Tab.Screen name="Detalhes" component={DetalhesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/