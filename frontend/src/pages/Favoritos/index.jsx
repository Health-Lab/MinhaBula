import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth";
import userService from "../../services/userService";

export default function Favoritos(){
	const auth = useContext(AuthContext);
	const { fetchFavoritesMedicines } = userService;
	const [favorites, setFavorites] = useState();

	useEffect(() => {
		fetchData(auth.favorites)
	}, [fetchData])

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
			<View>
				<FlatList
					data={favorites}
					renderItem={({item}) => (
						<Text>
							{item.nome}
						</Text>
					)}
					keyExtractor={item => item.nome}
				/>
			</View>
		)}
	</View>
	);
}