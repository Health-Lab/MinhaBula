import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../../pages/Welcome'
import SignIn from '../../pages/SignIn'
import Home from '../../pages/Home'
import CadastreSe from '../../pages/CadastreSe'
import Chat from "../../pages/Chat";
import Remedio from "../../pages/medicina";
import Perfil from '../../pages/Perfil';
import Atendimento from '../../pages/Atendimento';
import Favoritos from '../../pages/Favoritos';

const Stack =  createNativeStackNavigator();

export default function RoutesStack(){
	return(
		<Stack.Navigator>
			<Stack.Screen name="Welcome"	component={Welcome}	options={{	headerShown:false	}}/>
									
			<Stack.Screen	name="Home"	component={Home}	options={{	headerShown:false }}/>

			<Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false }}/>

			<Stack.Screen name="CadastreSe" component={CadastreSe} options={{	headerShown:false }} />

			<Stack.Screen name="Chat" component={Chat} options={{	headerShown:false }} />

			<Stack.Screen name="Remedio" component={Remedio} options={{ headerShown:false }} />

			<Stack.Screen name="Atendimento" component={Atendimento} options={{ headerShown:false }} />

			<Stack.Screen name="Favoritos" component={Favoritos} options={{ headerShown:false }} />

			<Stack.Screen name="Perfil" component={Perfil} options={{ headerShown:false }} />

		</Stack.Navigator>
	)
}