
import React from "react";
import { StatusBar } from "react-native";

import StackRoutes from "./src/Routes/stack.routes";
import ToBarRoute from "./src/Routes/toBar.routes"; 

import{NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
      backgroundColor="#38A69D" 
      barStyle="light-content" 
      />
      <StackRoutes/>
  
    </NavigationContainer>
  );
}

