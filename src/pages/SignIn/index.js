import React, {useState} from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity, 
} from "react-native";

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'


export default function SignIn(){

    const [nome, setNome] = useState ('')
    const [password, setPassword] = useState ('')

    const navigation = useNavigation();
    
    function handleLogin(){
        const data ={
            nome,
            password
        }
        navigation.navigate('Home')
        console.log(data)
    }

    return(
        <View style={styles.container}>
            <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Que bom ter você aqui!</Text>
            </Animatable.View>
            
            <Animatable.View animation={"fadeInUp"} style={styles.containerFrom}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                onChangeText={setNome}
                value={nome}
                placeholder="Digite seu email"
                style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput 
                onChangeText={setPassword}
                value={password}
                placeholder="Digite sua senha"
                style={styles.input}
                secureTextEntry={true}
                />

                <TouchableOpacity 
                 onPress={()=> handleLogin()}
                 
                style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> navigation.navigate('CadastreSe')}
                style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d',
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom:'8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerFrom:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    }, title:{
        fontSize: 20,
        marginTop:28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#38a69d',
        width:'100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color:'#FFF',
        fontSize:18,
        fontWeight: 'bold',
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    }
})