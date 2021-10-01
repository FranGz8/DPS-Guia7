import React from 'react';
import Perros from '../screens/Perros';
import Gatos from '../screens/Gatos';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab=createBottomTabNavigator();

export default function Navigation(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Gatos" component={Gatos} options={{tabBarLabel:"Gatos", tabBarIcon: ({ color,size }) => (
          <Icon name="cat" size={size+10} color={color} />
        ) }}  />
      <Tab.Screen name="Perros" component={Perros} options={{tabBarLabel:"Perros", tabBarIcon: ({ color,size }) => (
          <Icon name="dog" size={size+10} color={color} />
        ) }}  />
    </Tab.Navigator>
  );
}
