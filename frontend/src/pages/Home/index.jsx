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
	const [hidden, setHidden] = useState(false);
	const [focus, setFocus] = useState(false)
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
		setHidden(false)
	}

	function handlePress(data){
		setInputSearch(data)
		setHidden(true)
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
				<TextInput style={focus ? styles.Input : styles.outFocus}
					onFocus={() => setFocus(true)}
					placeholder="Pesquisar"
					placeholderTextColor="#FFFF"
					onChangeText={handleInputChange}
					value={inputSearch}
				/>
				<TouchableOpacity style={styles.SearchButton} onPress={handleSearchMovie}>
					<Feather name="search" size={30} color="#373737" />
				</TouchableOpacity>
			</View>
			{inputSearch && (
				<ScrollView style={[styles.results, hidden ? styles.hidden : undefined]}>
					{medicines.filter(item => {
						const searchTerm = inputSearch.toLowerCase();
						const countryName = item.toLowerCase();
						return searchTerm && countryName.startsWith(searchTerm);
					})
					.map(medicine => {
						return (
								<Pressable key={medicine} onPress={() => handlePress(medicine)}>
									<Text style={styles.terms}>{medicine}</Text>
								</Pressable>
						)
					})}
				</ScrollView>
			)}
			<Actions/>
		</View>
	)
}