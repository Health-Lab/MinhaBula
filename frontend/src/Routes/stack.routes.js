import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import CadastreSe from '../pages/CadastreSe'
import ToBarRoute from "./toBar.routes";
import Chat from "../pages/Chat";
import Remedio from "../pages/medicina";

const Stack =  createNativeStackNavigator();

export default function RoutesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
                headerShown:false
            }}
            />
            
            <Stack.Screen
            name="Home"
            component={ToBarRoute}
            options={{
                headerShown:false
            }}
            />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name="CadastreSe"
            component={CadastreSe}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name="Remedio"
            component={Remedio}
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    )
}