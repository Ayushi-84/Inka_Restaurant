import React,{useState}  from 'react';
import HomeScreen from './Component/HomeScreen';
import RootNavigator from './Component/RootNavigator';
import {NavigationContainer} from "@react-navigation/native"
import { createStore } from 'redux'
import RootReducer from './Component/RootReducer';
import { Provider } from 'react-redux';


const store=createStore(RootReducer)
import {View,Text} from "react-native"
import Data from './Component/Data';
import PlusMinus from './Component/PlusMinus';

export default function App(props) {

  return (
    <Provider store={store}>
    <NavigationContainer>
    <RootNavigator/>
    </NavigationContainer>
    </Provider>
    
  );
}
