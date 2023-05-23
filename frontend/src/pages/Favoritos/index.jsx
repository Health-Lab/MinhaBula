import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth";
import userService from "../../services/userService";
import { FavoriteCard } from "../../components/FavoritesCard/FavoriteCard";
import { useIsFocused } from "@react-navigation/native";

export default function Favoritos(){
	const auth = useContext(AuthContext);
	const isFocused = useIsFocused(); 
	const { fetchFavoritesMedicines } = userService;
	const [favorites, setFavorites] = useState();

	useEffect(() => {
		if (isFocused){
			fetchData()
		}
	}, [auth, isFocused])

	async function fetchData(){
		const res = await fetchFavoritesMedicines(auth.favorites)
		setFavorites(res)
	}

	return(
	<View style={styles.container}>
		<View>
			<Text style={styles.text}>
				Pagina Favoritos
			</Text>
		</View>
		{favorites && (
			<View style={styles.list}>
				<FlatList
					data={favorites}
					renderItem={({item}) => (
						<FavoriteCard nome={item.nome} principioAtivo={item.principioAtivo} empresa={item.laboratorio.empresa}/>
					)}
					keyExtractor={item => item.nome}
				/>
			</View>
		)}
	</View>
	);
}