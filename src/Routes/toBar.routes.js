import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Atendimento from '../pages/Atendimento'
import Historico from '../pages/Historico'

import {Ionicons} from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

function ToBarRoute(){

    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#38a69d',
            tabBarInactiveTintColor: '#FFF',
            tabBarStyle:{
                position: 'absolute',
                backgroundColor:'#373737',
                borderTopWidth: 0,
                bottom: 14,
                left:14,
                right: 14,
                elevation: 0,
                borderRadius: 4,
                height: 60

            }
        }}
        >
            <Tab.Screen 
            name='Inicio'
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused})=>{
                    if(focused){
                        return <Ionicons name='home'
                        size={size} color={color}/>
                    }
                    return <Ionicons name='home-outline'
                    size={size} color={color}/>
                }
            }}
            />
            <Tab.Screen 
            name='Perfil'
            component={Perfil}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused})=>{
                    if(focused){
                        return <Ionicons name='person'
                        size={size} color={color}/>
                    }
                    return <Ionicons name='person-outline'
                    size={size} color={color}/>
                }
            }}
            />
            <Tab.Screen 
            name='Atendimento'
            component={Atendimento}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused})=>{
                    if(focused){
                        return <Ionicons name='chatbubble-ellipses'
                        size={size} color={color}/>
                    }
                    return <Ionicons name='chatbubble-ellipses-outline'
                    size={size} color={color}/>
                }
            }}
            />
            <Tab.Screen 
            name='Historico'
            component={Historico}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused})=>{
                    if(focused){
                        return <Ionicons name='file-tray-full'
                        size={size} color={color}/>
                    }
                    return <Ionicons name='file-tray-full-outline'
                    size={size} color={color}/>
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default ToBarRoute;