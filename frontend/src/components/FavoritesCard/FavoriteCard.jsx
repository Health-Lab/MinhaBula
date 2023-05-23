import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export function FavoriteCard({nome, principioAtivo, empresa}){
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("Remedio", {nome: nome})
	}


	return(
		<View style={styles.container}>
			<Pressable onPress={handlePress} android_ripple={{color: "#fff"}}>
				<View style={styles.subContainer}>
					<Text style={styles.name}>
						{nome}
					</Text>
					<Text style={styles.text}>
						{principioAtivo}
					</Text>
					<Text style={styles.text}>
						{empresa}
					</Text>
				</View>
			</Pressable>
		</View>
	)
}