import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../pages/Home";
import Favoritos from "../pages/Favoritos";
import Atendimento from "../pages/Atendimento";
import UserProfileView from "../pages/Perfil"

const Tab = createBottomTabNavigator();

export default function TabNavigation(){
	return(
		<Tab.Navigator screenOptions={{
			tabBarActiveTintColor: '#2d857e',
			tabBarInactiveTintColor: '#FFF',
			tabBarStyle: {
				backgroundColor: "#373737",
				height: 60
			},
			headerShown: false
		}}>
			<Tab.Screen
				name="Inicio" 
				component={Home}
				options={{
					tabBarIcon: ({color, size, focused}) => {
						return focused ? <Ionicons name="home" size={size} color={color}/> : <Ionicons name="home-outline" size={size} color={color}/>
					}
				}}
			/>
			<Tab.Screen
				name="Favoritos" 
				component={Favoritos}
				options={{
					tabBarIcon: ({color, size, focused}) => {
						return focused ? <Ionicons name="bookmarks" size={size} color={color}/> : <Ionicons name="bookmarks-outline" size={size} color={color}/>
					}
				}}
			/>
			<Tab.Screen
				name="Atendimento" 
				component={Atendimento}
				options={{
					tabBarIcon: ({color, size, focused}) => {
						return focused ? <Ionicons name="chatbubble-ellipses" size={size} color={color}/> : <Ionicons name="chatbubble-ellipses-outline" size={size} color={color}/>
					}
				}}
			/>
			<Tab.Screen
				name="Perfil" 
				component={UserProfileView}
				options={{
					tabBarIcon: ({color, size, focused}) => {
						return focused ? <Ionicons name="person" size={size} color={color}/> : <Ionicons name="person-outline" size={size} color={color}/>
					}
				}}
			/>
		</Tab.Navigator>
	)
}