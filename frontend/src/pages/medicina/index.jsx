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
	const { getMedicineByName, includeFavoriteMedicine } = userService;
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
	}

	const handleFavorite = () => {
		favorite == true ? setFavorite(false) : setFavorite(true)
	}

	const handleTTS = () => {
		const tts = "try hard";
		Speech.speak(tts, {
			language: "pt-BR"
		});
	}

	return(
		<SafeAreaView style={styles.container}>
			{medicine && (
				<>
					<Text style={styles.medicineName}>
							{medicine.data.nome}
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
						<MedicinesScreen title="Princípio Ativo" value={[medicine.data.principioAtivo]}/>
						<MedicinesScreen title="Dosagem" value={[medicine.data.dosagem]}/>
						<MedicinesScreen title="Funcionamento" value={[medicine.data.funcionamento]}/>
						<MedicinesScreen title="Composição" value={[medicine.data.composicao]}/>
						<MedicinesScreen title="Contra Indicações" value={[medicine.data.contraIndicacao]}/>
						<MedicinesScreen title="Precauções" value={[medicine.data.precaucoes]}/>
						<MedicinesScreen title="Reações" value={[medicine.data.reacoes]}/>
						<MedicinesScreen title="Overdose" value={[medicine.data.overdose]}/>
						<MedicinesScreen title="Laboratório" value={[medicine.data.laboratorio.empresa, medicine.data.laboratorio.cnpj, (medicine.data.laboratorio.endereco || medicine.data.laboratorio.endereço), medicine.data.laboratorio.sac]}/>
					</ScrollView>
				</>
			)}
		</SafeAreaView>
	)
};