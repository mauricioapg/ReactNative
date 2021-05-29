import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import CustomDrawer from 'components/CustomDrawer';

function CustomDrawer(props){
    return(
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image style={{}} source={require('../../images/cabecalho.png')} />
            </View>            
            <View>
                <TouchableOpacity
                style={{padding: 6}}                    
                onPress={() => {props.navigation.navigate('IMC')}}>
                    <View style={{flexDirection: "row"}}>
                        <View style={{}}>
                            <Image style={styles.iconeIMC} source={require('../../images/imc.png')} />
                        </View>
                        <View style={styles.itemMenu}>
                            <Text style={styles.txtItemIMC}>IMC</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={{padding: 6}}
                onPress={() => {props.navigation.navigate('Historico')}}>
                    <View style={{flexDirection: "row"}}>
                        <View style={{}}>
                            <Image style={styles.iconeHistorico} source={require('../../images/historico.png')} />
                        </View>
                        <View style={styles.itemMenu}>
                            <Text style={styles.txtItemHistorico}>Histórico</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#F8F6F6"
    },
    cabecalho:{
        alignItems: "center",
        padding: 20,
        backgroundColor: "#1E3525"
    },
    iconeIMC:{
        marginTop: 8,
        marginLeft: 1
    },
    iconeHistorico:{
        marginTop: 6,
        marginLeft: 1
    },
    itemMenu:{
        marginTop: 8,
        marginLeft: 50
    },
    txtItemIMC:{
        fontSize: 15,
        color: "#2A2929"
    },
    txtItemHistorico:{
        fontSize: 15,
        marginLeft: 3,
        color: "#2A2929"
    }
  })

  export default CustomDrawer;