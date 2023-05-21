import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth";
import userService from "../../services/userService";
import { FavoriteCard } from "../../components/FavoritesCard/FavoriteCard";

export default function Favoritos(){
	const auth = useContext(AuthContext);
	const { fetchFavoritesMedicines } = userService;
	const [favorites, setFavorites] = useState();

	useEffect(() => {
		fetchData(auth.favorites)
	}, [fetchData, auth.favorites])

	const fetchData = async(favorites) => {
		const res = await fetchFavoritesMedicines(favorites)
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