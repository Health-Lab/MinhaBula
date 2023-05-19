import { SafeAreaView, ScrollView, Text, View, Pressable } from "react-native";
import { useContext, useEffect, useState } from "react";
import userService from "../../services/userService";
import { MedicinesScreen } from "../../components/MedicineScreen/MedicinesScreen";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import AuthContext from "../../contexts/auth";

export default function Remedio({route}){
	const [medicine, setMedicine] = useState();
	const [favorite, setFavorite] = useState(false);
	const { getMedicineByName, includeFavoriteMedicine } = userService;
	const { nome } = route.params;
	const auth = useContext(AuthContext);

	useEffect(() => {
		async function fecthData(){
			const res = await getMedicineByName({name: nome})
			setMedicine(res)
		};
		fecthData();
	}, [])

	const handleFavorite = () => {
		if(favorite === false){
			setFavorite(true)
			//console.log(auth.uid, medicine.id);
			includeFavoriteMedicine(auth.uid, medicine.id)
		}else{
			setFavorite(false)
		}
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