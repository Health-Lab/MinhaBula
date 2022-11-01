import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Atendimento(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Pagina Atendimento</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    text:{
        fontSize: 25,
        fontWeight:'bold'
    }
})