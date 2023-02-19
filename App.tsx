import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import FlashMessage from "react-native-flash-message";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

export default function App() {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigation colorScheme={colorScheme} />
      <FlashMessage />
    </SafeAreaProvider>
  );
  // }
}
