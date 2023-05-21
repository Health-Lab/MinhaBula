import { StatusBar } from "react-native";
import StackNavigation from "./src/routes/StackNavigation";
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from "./src/contexts/auth";
import { auth } from "./src/config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import userService from "./src/services/userService";

export default function App() {
	const [user, setUser] = useState();
	const [favorites, setFavorites] = useState();
	const { getFavorites } = userService;

	useEffect(() => {
		auth.onAuthStateChanged(_user => {
			setUser(_user.uid);
			fetchData(user);
		});
	}, [fetchData,user]);

	const fetchData = async(id) => {
		const res =  await getFavorites(id);
		setFavorites(res);
	}

	return (
		<NavigationContainer>
			<AuthContext.Provider value={{uid: user, favorites: favorites}}>
				<StatusBar 
					backgroundColor='#2d857e'
					barStyle="light-content" 
				/>
				<StackNavigation/>
			</AuthContext.Provider>
		</NavigationContainer>
	);
}

