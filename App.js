//React
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Routes from './src/routes/index';

//Obter as informações do usuário em todas as telas
import AuthProvider from './src/contexts/auth';

//Fontes
import  AppLoading  from 'expo-app-loading';
import {useFonts, Montserrat_300Light,  Montserrat_500Medium, Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';

//Firebase
import firebase from './src/services/firebaseConnection';

console.disableYellowBox=true


export default function App(){

  
 let [fontsLoaded, error] = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
 } 



  return(
    <NavigationContainer>
      <AuthProvider>

        <StatusBar backgroundColor= 'grey' barStyle='light-content'/>
        <Routes/>

      </AuthProvider>
    </NavigationContainer>
  );
}