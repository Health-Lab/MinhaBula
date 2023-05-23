import { View,  Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from "./styles";
import AuthContext from "../../contexts/auth";
import { useContext } from "react";

export default function Welcome(){
	const navigation = useNavigation();
	const auth = useContext(AuthContext);
	function handlePress(){
		if(auth.uid !== undefined){
			navigation.navigate('SignIn')
		} else{
			navigation.navigate('SignIn')
		}
	}

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
					onPress={handlePress}
					style={styles.button}
				>
				<Text style={styles.buttonText}>Acessar</Text>
			</TouchableOpacity>
			</Animatable.View>
		</View>
	);

}