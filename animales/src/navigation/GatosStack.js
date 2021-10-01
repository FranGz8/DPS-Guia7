import React from 'react'; 
import {createStackNavigator} from '@react-navigation/stack'; 
import Gatos from '../screens/Gatos'; 

const Stack= createStackNavigator(); 

export default function GatosStack(){ 
    return( 
        <Stack.Navigator> 
            <Stack.Screen name="gatos" component={Gatos} options={{title:'Gatos'}}/> 
        </Stack.Navigator> 
    ); 
}