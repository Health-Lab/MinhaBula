import { NavigationContainer} from "@react-navigation/native";

import{RoutesStack} from './stack.routes'
import { RouteToBar } from "./toBar.routes";

export function Routes(){
    return(
        <NavigationContainer>
          <RoutesStack/>
          
        </NavigationContainer>
       
    )
}