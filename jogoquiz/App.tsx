import React from 'react';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-ionicons';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, 
TouchableOpacity, Alert, Button, Image } from 'react-native';

//TELAS
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Pergunta from './pages/Pergunta';

const Stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const Drawer = createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#08298A"
      style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Categorias"
          component={Categorias}
          options={{
            tabBarLabel: 'Categorias',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="albums" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Pergunta"
          component={Pergunta}
          options={{
            tabBarLabel: 'Pergunta',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="settings" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
  )
}

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={navOptionHandler}></Stack.Screen>
        <Stack.Screen name="Pergunta" component={Tabs} options={navOptionHandler}></Stack.Screen>
        <Stack.Screen name="Categorias" component={Tabs} options={navOptionHandler}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}