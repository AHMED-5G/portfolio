import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useColorScheme from "./src/hooks/useColorScheme";
import { RootSiblingParent } from "react-native-root-siblings";
import Navigation from "./src/navigation";
import useCachedResources from "./src/hooks/useCachedResources";
import LoadingIndicator from "./src/components/mini/LoadingIndicator";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <LoadingIndicator />;
  }

  return (
    <Provider store={store}>
      <RootSiblingParent>
        <SafeAreaProvider>
          <PersistGate persistor={persistor}>
            <StatusBar style='auto' />
        
            <Navigation colorScheme={colorScheme} />
          </PersistGate>
        </SafeAreaProvider>
      </RootSiblingParent>
    </Provider>
  );
}
