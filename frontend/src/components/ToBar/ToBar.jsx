import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

export function ToBar(){
	const route = useRoute();
	const navigation = useNavigation();
	const color = "#2d857e";
	const white = "#fff";

	const handlePress = (routeName) => {
		navigation.navigate(routeName)
	}

	return (
		<View style={styles.container}>
			<View>
				<Pressable style={styles.actions} onPress={() => handlePress("Home")}>
					{route.name === "Home" ? (
						<>
							<Ionicons name='home' size={32} color={color}/>
							<Text style={styles.active}>Início</Text>
						</>
					) : (
						<>
						<Ionicons name='home-outline' size={32} color={white}/>
						<Text style={styles.default}>Início</Text>
						</>
					)}
				</Pressable>
			</View>
			<View>
				<Pressable style={styles.actions} onPress={() => handlePress("Atendimento")}>
					{route.name === "Atendimento" ? (
						<>
							<Ionicons name='chatbubble-ellipses' size={32} color={color}/>
							<Text style={styles.active}>Atendimento</Text>
						</>
					): (
						<>
							<Ionicons name='chatbubble-ellipses-outline' size={32} color={white}/>
							<Text style={styles.default}>Atendimento</Text>
						</>
					)}
				</Pressable>
			</View>
			<View>
				<Pressable style={styles.actions} onPress={() => handlePress("Favoritos")}>
					{route.name === "Favoritos" ? (
						<>
							<Ionicons name='bookmarks' size={32} color={color}/>
							<Text style={styles.active}>Favoritos</Text>
						</>
					) : (
							<>
								<Ionicons name='bookmarks-outline' size={32} color={white}/>
								<Text style={styles.default}>Favoritos</Text>
							</>
					)}
				</Pressable>
			</View>
			<View>
				<Pressable style={styles.actions} onPress={() => handlePress("Perfil")}>
					{route.name === "Perfil" ? (
						<>
							<Ionicons name='person' size={32} color={color}/>
							<Text style={styles.active}>Perfil</Text>
						</>
					) : (
						<>
							<Ionicons name='person-outline' size={32} color={white}/>
							<Text style={styles.default}>Perfil</Text>
						</>
					)}
				</Pressable>
			</View>
		</View>
	)
}