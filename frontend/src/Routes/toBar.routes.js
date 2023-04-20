import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Atendimento from '../pages/Atendimento'
import Favoritos from '../pages/Favoritos'

import {Ionicons} from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

function ToBarRoute(){

    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#2d857e',
            tabBarInactiveTintColor: '#FFF',
            
            tabBarStyle:{
                position: 'relative',
                backgroundColor:'#373737',
                borderTopWidth: 0,
                borderRadius: 1,
                height: 60,
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
            name='Favorito'
            component={Favoritos}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused})=>{
                    if(focused){
                        return <Ionicons name='bookmarks'
                        size={size} color={color}/>
                    }
                    return <Ionicons name='bookmarks-outline'
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
        </Tab.Navigator>
    )
}

export default ToBarRoute;