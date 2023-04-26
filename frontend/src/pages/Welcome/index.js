import { useState, useEffect } from "react";
import { View,  Text,  StyleSheet, Image, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { auth } from '../../config/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

export default function Welcome(){
	const [user, setUser] = useState();
	const navigation = useNavigation();

	useEffect(() => {
		auth.onAuthStateChanged(_user => {
			setUser(_user);
			console.log(user);
		});
	}, []);

	return(
		<View style={styles.container}>
			<View style={styles.containerLogo}>
				<Animatable.Image
					animation={"flipInY"}
					source={require('../../assets/logo.png')}
					style={{width: '100%'}}
					resizeMode="contain"
				/>
			</View>
			<Animatable.View 
				delay={600}
				animation={"fadeInUp"}
				style={styles.containerFrom}   
			>
				<Text style={styles.title}>Minha Bula oferecem a possibilidade de pesquisa rápida pelo nome do medicamentos!</Text>
				<Text style={styles.text}>Faça o login para começar</Text>
				<TouchableOpacity 
					onPress={()=> navigation.navigate('SignIn')}
					style={styles.button}
				>
				<Text style={styles.buttonText}>Acessar</Text>
			</TouchableOpacity>
			</Animatable.View>
		</View>
	);

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerFrom:{
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd:'5%',
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 5,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems: 'center',
        justifyContent:'center', 
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight:'bold'
    }

})