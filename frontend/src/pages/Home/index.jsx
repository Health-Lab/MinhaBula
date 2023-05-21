import { useContext, useEffect, useState } from "react";
import { TextInput, View, TouchableOpacity, ScrollView, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import userService from "../../services/userService";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import AuthContext from "../../contexts/auth";
import { Actions } from "../../components/Actions/Actions";

export default function Home(){
	const [inputSearch, setInputSearch] = useState("");
	const [medicines, setMedicines] = useState();
	const { getMedicinesNames } = userService;
	const navigation = useNavigation();
	const auth = useContext(AuthContext);

  function handleSearchMovie (){
    if(inputSearch == ""){
					return;
				}
    setInputSearch('');
    navigation.navigate('Remedio', {nome: inputSearch});
  }

	function handleInputChange(value){
		setInputSearch(value)
	}

	function handlePress(data){
		setInputSearch(data)
	}

	useEffect(() => {
		async function fetchData(){
			const res = await getMedicinesNames();
			setMedicines(res);
		}
		fetchData();
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.SearchContainer}>
				<TextInput style={styles.Input}
					placeholder="Pesquisar"
					placeholderTextColor="#FFFF"
					onChangeText={handleInputChange}
					value={inputSearch}
				/>
				<TouchableOpacity style={styles.SearchButton} onPress={handleSearchMovie}>
					<Feather name="search" size={30} color="#373737" />
				</TouchableOpacity>
			</View>
			<Actions/>
			{inputSearch && (
				<ScrollView>
					{medicines.filter(item => {
						const searchTerm = inputSearch.toLowerCase();
						const countryName = item.toLowerCase();
						return searchTerm && countryName.startsWith(searchTerm);
					})
					.map(medicine => {
						return (
								<Pressable key={medicine} onPress={() => handlePress(medicine)}>
									<Text> {medicine} </Text>
								</Pressable>
						)
					})}
				</ScrollView>
			)}
		</View>
	)
}