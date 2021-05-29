import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class HomeScreen extends Component{
    static navigationOptions = ({screenProps}) => ({
        title: "Home",
        headerLeft: (
            <TouchableOpacity style={{backgroundColor: 'red'}} onPress={() => screenProps.openDraw()}>
                <Text style={{color: 'white'}}>Abrir</Text>
            </TouchableOpacity>
        )
    })
    render(){
        return(
            <View>
                <Text>Essa é a HomeScreen!</Text>
                <TouchableOpacity style={{backgroundColor: 'blue'}} onPress={() => this.props.navigation.navigate("Ativos")}>
                <Text style={{color: 'white'}}>Ativos</Text>
                </TouchableOpacity>
            </View>
        )
    }
}