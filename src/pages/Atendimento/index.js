import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from "react-native";


import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'



export default function Atendimento() {

    const navigation = useNavigation();

    const [nome, setNome] = useState('')
    const [contato, setContato] = useState('')
    const [email, setEmail] = useState('')


    function handleChat() {
        const data = {
            nome,
            contato,
            email,

        }
        navigation.navigate('Chat')
        console.log(data)
    }

    return (

        <SafeAreaView style={styles.container}>
            <Animatable.View animation={"zoomIn"} delay={400} style={styles.containerHeader}>
                <Text style={styles.message}>Deseja Iniciar um atendimento?</Text>
                <Text style={styles.title}>Complete os dados, para iniciar.</Text>
            </Animatable.View>



            <Text style={styles.textInput}>Nome:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                placeholder="Digite seu nome"
            />

            <Text style={styles.textInput}>Contato:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setContato}
                value={contato}
                placeholder="(99) 99999-9999"
                keyboardType="numeric"
            />

            <Text style={styles.textInput}>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="minhabula@tes.com"
            />

            <Text style={styles.textInput}>Digite sua mensagem:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                placeholder="ex: gostaria saber mais sobre remédio.."
            />

            <TouchableOpacity
                style={styles.buttonCadastrar}
                onPress={handleChat}>
                <Text style={styles.buttonText}>Iniciar atendimento</Text>
            </TouchableOpacity>

        </SafeAreaView>

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 12

    },
    title: {
        fontSize: 12,
        marginBottom: 5,
        color: '#121212',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginStart: 18
    },
    textInput: {
        fontSize: 13,
        marginEnd: 5,
        color: '#121212',
        alignSelf: 'flex-start',
        marginStart: 5,
        marginTop: 10

    },
    input: {
        width: '100%',
        height: 35,
        backgroundColor: '#DDD',
        borderRadius: 5,
        fontSize: 15,
        padding: 5,
        margin: 6
    },
    buttonCadastrar: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bunttonVoltarLongin: {
        marginTop: 14,
        alignSelf: 'center'
    },
    loginVoltar: {
        color: '#a1a1a1'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    }
})