import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <StatusBar />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    </RootSiblingParent>
  );
  // }
}
