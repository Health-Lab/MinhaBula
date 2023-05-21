import { View, Text, Pressable } from "react-native";
import style from "./styles";

export function Actions(){

	const handlePress = () => {
		console.log("Press");
	}

	return(
		<View style={style.container}>
			<View style={style.subContainer}>
				<Text style={style.text}>
					Histórico
				</Text>
			</View>
			<View style={style.subContainer}>
				<Pressable style={style.button} onPress={handlePress}>
					<Text style={style.text}>
						Adicionar Medicamente
					</Text>
				</Pressable>
			</View>
		</View>
	)
};