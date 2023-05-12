import { StatusBar } from "react-native";
import StackNavigation from "./src/routes/StackNavigation";
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from "./src/contexts/auth";
import { auth } from "./src/config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function App() {
	const [user, setUser] = useState();
	useEffect(() => {
		auth.onAuthStateChanged(_user => {
			setUser(_user.uid);
		});
	}, []);

	return (
		<NavigationContainer>
			<AuthContext.Provider value={{uid: user}}>
				<StatusBar 
					backgroundColor='#2d857e'
					barStyle="light-content" 
				/>
				<StackNavigation/>
			</AuthContext.Provider>
		</NavigationContainer>
	);
}

