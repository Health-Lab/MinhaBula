import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import CadastreSe from '../pages/CadastreSe'
import Chat from "../pages/Chat";
import Remedio from "../pages/medicina";

import TabNavigation from "./TabNavigation";

const Stack =  createNativeStackNavigator();

export default function StackNavigation(){
	return(
		<Stack.Navigator>
			<Stack.Screen 
				name="Welcome"	
				component={Welcome}	
				options={{	headerShown:false	}}
			/>
									
			<Stack.Screen	
				name="Home"	
				component={TabNavigation}	
				options={{	headerShown:false }}
				/>

			<Stack.Screen 
				name="SignIn" 
				component={SignIn} 
				options={{ headerShown:false }}
				/>

			<Stack.Screen 
				name="CadastreSe" 
				component={CadastreSe} 
				options={{	headerShown:false }} 
				/>

			<Stack.Screen 
				name="Chat" 
				component={Chat}
				/>

			<Stack.Screen 
				name="Remedio" 
				component={Remedio}
				/>

		</Stack.Navigator>
	)
}