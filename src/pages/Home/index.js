import React from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Home = () => {

  function handleSearchMovie (){

    if (input ==='')return;
    
    navigation.navigate('Search', {name: input})
    setInput('');
   
  }

  return (
    <View style={style.container}>

      <View style={style.SearchContainer}>
        <TextInput style={style.Input}
          placeholder="Pesquisar"
          placeholderTextColor="#FFFF"
          
        />
        <TouchableOpacity style={style.SearchButton} onPress={handleSearchMovie}>
          <Feather name="search" size={30} color="#373737" />
        </TouchableOpacity>
      </View>


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
    color: '#121212'
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