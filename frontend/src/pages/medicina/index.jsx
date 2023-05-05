import { SafeAreaView, ScrollView, Text } from "react-native";
import { useEffect, useState } from "react";
import userService from "../../services/userService";

export default function Remedio({route}){
	const [medicine, setMedicine] = useState();
	const { getMedicineByName } = userService;
	const { nome } = route.params

	useEffect(() => {
		async function fecthData(){
			const res = await getMedicineByName({name: nome})
			setMedicine(res)
		};
		fecthData();
	}, [])

	return(
		<SafeAreaView>
			<ScrollView>
				{medicine && (
				<>
					<Text>
						Nome: {medicine[0].nome}
					</Text>
					<Text>
						Principio Ativo: {medicine[0].principioAtivo}
					</Text>
					<Text>
						Dosagem: {medicine[0].dosagem}
					</Text>
					<Text>
						Composição: {medicine[0].composicao}
					</Text>
					<Text>
						Contra Indicação: {medicine[0].contraIndicacao}
					</Text>
					<Text>
						Funcionamento: {medicine[0].funcionamento}
					</Text>
					<Text>
						Overdose: {medicine[0].overdose}
					</Text>
					<Text>
						Precauções: {medicine[0].precaucoes}
					</Text>
					<Text>
						Reações: {medicine[0].reacoes}
					</Text>
					<Text>
						Laboratório: {medicine[0].laboratorio.empresa}
					</Text>
					<Text>
						CNPJ: {medicine[0].laboratorio.cnpj}
					</Text>
					<Text>
						Enderço: {medicine[0].laboratorio.endereço || medicine[0].laboratorio.endereco}
					</Text>
					<Text>
						SAC: {medicine[0].laboratorio.sac}
					</Text>
				</>
				)}
			</ScrollView>
		</SafeAreaView>
	)
};