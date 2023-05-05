import { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity, ScrollView, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import userService from "../../services/userService";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
	const [inputSearch, setInputSearch] = useState("");
	const [medicines, setMedicines] = useState();
	const { getMedicinesNames } = userService;
	const navigation = useNavigation();

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
    <View style={style.container}>

      <View style={style.SearchContainer}>
        <TextInput style={style.Input}
          placeholder="Pesquisar"
          placeholderTextColor="#FFFF"
										onChangeText={handleInputChange}
          value={inputSearch}
        />
        <TouchableOpacity style={style.SearchButton} onPress={handleSearchMovie}>
          <Feather name="search" size={30} color="#373737" />
        </TouchableOpacity>
      </View>
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
const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 4,

  },
  seachInput: {
    width: '100%',
    height: 10,
    paddingLeft: 8,
    fontSize: 16,
  },
  Input: {
    backgroundColor: '#373737',
    width: '85%',
    height: 50,
    borderRadius:10,
    padding: 15,
    fontSize: 18,
    color: '#fff'
  },
  SearchButton: {
    width: '15%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  SearchContainer: {
    marginTop: 10,
    flexDirection: "row",
    width: '100%',
    height: 50,
    alignItems: 'center',
    padding: 9,
    marginBottom: 8,
  }, 
  

})

export default Home