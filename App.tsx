import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useColorScheme from "./src/hooks/useColorScheme";
import { RootSiblingParent } from "react-native-root-siblings";
import Navigation from "./src/navigation";
import useCachedResources from "./src/hooks/useCachedResources";
import LoadingIndicator from "./src/components/mini/LoadingIndicator";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return <LoadingIndicator />;
  }
  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <StatusBar />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}
