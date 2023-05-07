import { useState } from "react";
import { Text, TextInput, TouchableOpacity, SafeAreaView, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { ToBar } from "../../components/ToBar/ToBar";
import styles from "./styles";

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
		<SafeAreaView style={styles.screen}>
			<View style={styles.container}>
				<Animatable.View animation={"zoomIn"} delay={400} style={styles.containerHeader}>
					<Text style={styles.message}>Deseja Iniciar um atendimento?</Text>
					<Text style={styles.title}>Complete os dados, para iniciar.</Text>
				</Animatable.View>

				<Text style={styles.textInput}>
					Nome:
				</Text>
				<TextInput
					style={styles.input}
					onChangeText={setNome}
					value={nome}
					placeholder="Digite seu nome"
				/>

				<Text style={styles.textInput}>
					Contato:
				</Text>
				<TextInput
					style={styles.input}
					onChangeText={setContato}
					value={contato}
					placeholder="(99) 99999-9999"
					keyboardType="numeric"
				/>

				<Text style={styles.textInput}>
					Email:
				</Text>
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
					<Text style={styles.buttonText}>
						Iniciar atendimento
					</Text>
				</TouchableOpacity>
			</View>
		<ToBar/>
		</SafeAreaView>

    );

}
