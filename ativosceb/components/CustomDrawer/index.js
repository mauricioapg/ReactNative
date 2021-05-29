import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import CustomDrawer from 'components/CustomDrawer';

function CustomDrawer(props){
    return(
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image style={{}} source={require('./logo_ceb_branco.png')} />
            </View>            
            <View>
                <TouchableOpacity
                style={{padding: 6}}                    
                onPress={() => {props.navigation.navigate('Home')}}>
                    <View style={{flexDirection: "row"}}>
                        <View style={{}}>
                            <Image style={styles.icone} source={require('./home.png')} />
                        </View>
                        <View style={styles.itemMenu}>
                            <Text style={styles.txtItemMenu}>Home</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={{padding: 6}}
                onPress={() => {props.navigation.navigate('Inserir')}}>
                    <View style={{flexDirection: "row"}}>
                        <View style={{}}>
                            <Image style={styles.icone} source={require('./inserir.png')} />
                        </View>
                        <View style={styles.itemMenu}>
                            <Text style={styles.txtItemMenu}>Novo Ativo</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={{padding: 6}}
                onPress={() => {props.navigation.navigate('Ativos')}}>
                    <View style={{flexDirection: "row"}}>
                        <View style={{}}>
                            <Image style={styles.icone} source={require('./lista.png')} />
                        </View>
                        <View style={styles.itemMenu}>
                            <Text style={styles.txtItemMenu}>Lista de Ativos</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={{padding: 6}}
                onPress={() => {props.navigation.navigate('Busca')}}>
                    <View style={{flexDirection: "row"}}>
                        <View style={{}}>
                            <Image style={styles.icone} source={require('./lista.png')} />
                        </View>
                        <View style={styles.itemMenu}>
                            <Text style={styles.txtItemMenu}>Busca Avançada</Text>
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
        padding: 40,
        backgroundColor: "#007792"
    },
    icone:{
        marginTop: 10,
        marginLeft: 1
    },
    itemMenu:{
        marginTop: 8,
        marginLeft: 50
    },
    txtItemMenu:{
        fontSize: 15,
        color: "#2A2929"
    }
  })

  export default CustomDrawer;