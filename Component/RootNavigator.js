import React from "react";
import { View } from "react-native";
import {createStackNavigator} from "@react-navigation/stack"
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from "./HomeScreen";
import Data from './Data';
import PlusMinus from "./PlusMinus";
import EditPlusMinus from "./EditPlusMinus"

export default function RootNavigator(props){
var StackNav=createStackNavigator()
function Component()
{
  return(
    <StackNav.Navigator>
      <StackNav.Screen 
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}
      />
         <StackNav.Screen 
      name="PlusMinus"
      component={PlusMinus}
      options={{headerShown: false}}
      />
        <StackNav.Screen 
      name="Data"
      component={Data}
      options={{headerShown: false}}
      />

<StackNav.Screen 
      name="EditPlusMinus"
      component={EditPlusMinus}
      options={{headerShown: false}}
      />


    </StackNav.Navigator>
  )
}


 var Drawer=createDrawerNavigator()
 return(
   <Drawer.Navigator>
    <Drawer.Screen
    name="Home"
    component={Component}
    options={{headerShown: false}}/>
   </Drawer.Navigator>
 )

}


