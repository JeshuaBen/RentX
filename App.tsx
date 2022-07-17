import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";

import { Scheduling } from "./src/screens/Scheduling";
import { Home } from "./src/screens/Home";
import theme from "./src/styles/theme";

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { CarDetails } from "./src/screens/CarDetails";
import { SchedulingDetails } from "./src/screens/SchedulingDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SchedulingDetails />
    </ThemeProvider>
  );
}
