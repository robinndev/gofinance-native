import React from 'react';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';

import {
  useFonts, // Use "Hooks"
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
// ThemeProvider é um Contexto, passamos o theme dentro dele 

import theme from './src/global/styles/theme'
// Aqui importamos nosso componente theme para passar ele dentro do "theme  "
import { Dashboard } from './src/screens/Dashboard';


//Tudo que está dentro do ThemeProvider, tem acesso ao theme que criamos. 
export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoaded) {
    return null
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
  );
}

