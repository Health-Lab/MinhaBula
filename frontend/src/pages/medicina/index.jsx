import { SafeAreaView, ScrollView, Text, View, Pressable } from "react-native";
import { useEffect, useState } from "react";
import userService from "../../services/userService";
import { MedicinesScreen } from "../../components/MedicineScreen/MedicinesScreen";
import styles from "./styles";
import { AntDesign, Feather } from '@expo/vector-icons';
import * as Speech from "expo-speech";

export default function Remedio({route}){
	const [medicine, setMedicine] = useState();
	const [favorite, setFavorite] = useState(false);
	const { getMedicineByName } = userService;
	const { nome } = route.params;

	useEffect(() => {
		async function fecthData(){
			const res = await getMedicineByName({name: nome})
			setMedicine(res)
		};
		fecthData();
		listAllVoices()
	}, [])

	const listAllVoices = async() => {
		let voices = await Speech.getAvailableVoicesAsync(); 
		console.log(voices);
	}

	const handleFavorite = () => {
		favorite == true ? setFavorite(false) : setFavorite(true)
	}

	const handleTTS = () => {
		const tts = "testando o text to speech utilizando react native e expo";
		Speech.speak(tts, {
			language: "pt-BR"
		});
		console.log("teste");
	}

	return(
		<SafeAreaView style={styles.container}>
			{medicine && (
				<>
					<Text style={styles.medicineName}>
							{medicine.nome}
						</Text>
					<View style={styles.headerContainer}>
						<Pressable onPress={handleFavorite}>
							{favorite == true ? (
								<AntDesign name="heart" size={28} color="#fc0000" />
							): (
								<AntDesign name="hearto" size={28} color="#fc0000" />
							)}
						</Pressable>
						<Pressable>
							<Feather name="volume-2" size={28} color="black" onPress={handleTTS} />
						</Pressable>
					</View>
					<ScrollView showsVerticalScrollIndicator={false}>
						<MedicinesScreen title="Princípio Ativo" value={[medicine.principioAtivo]}/>
						<MedicinesScreen title="Dosagem" value={[medicine.dosagem]}/>
						<MedicinesScreen title="Funcionamento" value={[medicine.funcionamento]}/>
						<MedicinesScreen title="Composição" value={[medicine.composicao]}/>
						<MedicinesScreen title="Contra Indicações" value={[medicine.contraIndicacao]}/>
						<MedicinesScreen title="Precauções" value={[medicine.precaucoes]}/>
						<MedicinesScreen title="Reações" value={[medicine.reacoes]}/>
						<MedicinesScreen title="Overdose" value={[medicine.overdose]}/>
						<MedicinesScreen title="Laboratório" value={[medicine.laboratorio.empresa, medicine.laboratorio.cnpj, (medicine.laboratorio.endereco || medicine.laboratorio.endereço), medicine.laboratorio.sac]}/>
					</ScrollView>
				</>
			)}
		</SafeAreaView>
	)
};