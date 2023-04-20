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

import{useForm, Controller} from 'react-hook-form'

import {useNavigation} from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

export default function CadastreSe(){

    const navigation = useNavigation();

    const [nome, setNome] = useState ('')
    const [contato, setContato] = useState ('')
    const [email, setEmail] = useState ('')
    const [dataNacimento, setdataNacimento] = useState ('')
    const [password, setPassword] = useState ('')
    const [confirmaPassword, setConfirmaPassword] = useState ('')

    function handleCadastro(){
        const data = {
            nome,
            contato,
            email,
            dataNacimento,
            password,
            confirmaPassword
        }

        console.log(data)
    }

    return(
   
        <SafeAreaView style={styles.container}>
            <Animatable.View animation={"zoomIn"} delay={400} style={styles.containerHeader}>
                <Text style={styles.message}>Vamos começar?</Text>
                <Text style={styles.title}>Complete os dados e crie sua conta.</Text>
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
                <Text style={styles.textInput}>Data de nacimento:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setdataNacimento}
                    value={dataNacimento}
                    placeholder="00/00/0000"
                    keyboardType="numeric"
                />

                <Text style={styles.textInput}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                />
                <Text style={styles.textInput}>Confirme sua senha:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setConfirmaPassword}
                    value={confirmaPassword}
                    placeholder="Digite novamente sua senha"
                    secureTextEntry={true}
                />

                <TouchableOpacity 
                    style={styles.buttonCadastrar}
                    onPress={handleCadastro}>
                    <Text style={styles.buttonText}>Finalizar cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=> navigation.navigate('SignIn')}
                    style={styles.bunttonVoltarLongin}>
                        <Text style={styles.loginVoltar}>Já possui uma conta? Fazer Login</Text>
                    </TouchableOpacity>
        </SafeAreaView>
    
    );

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFFAFA',
        padding: 12
       
    },
    title:{
        fontSize: 12,
        marginBottom: 5,
        color:'#121212',
        fontWeight:'bold',
        alignSelf: 'flex-start',
        marginStart: 18
    },
    textInput:{
        fontSize: 13,
        marginEnd: 5,
        color:'#121212',
        alignSelf: 'flex-start',
        marginStart: 5,
        marginTop: 10 
        
    },
    input:{
        width: '100%',
        height: 35,
        backgroundColor:'#DDD',
        borderRadius: 5,
        fontSize: 15,
        padding: 5,
        margin: 6
    },
    buttonCadastrar:{
        backgroundColor: '#38a69d',
        width:'100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonText:{
        color:'#FFF',
        fontSize:18,
        fontWeight: 'bold',
    },
    bunttonVoltarLongin:{
        marginTop: 14,
        alignSelf: 'center'
    },
    loginVoltar:{
        color: '#a1a1a1'
    },
    containerLogo:{
       flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    }
})