import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { ContainerChildren } from './src/components/ContainerChildren';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <ContainerChildren>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </ContainerChildren>
  );
}
