import { StatusBar } from "expo-status-bar";
import React from "react";

import { RootSiblingParent } from "react-native-root-siblings";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "@supabase/gotrue-js: Stack guards not supported in this environment",
]);

export default function App() {
  // const isLoadingComplete = useCachedResources();

  return (
    <Provider store={store}>
      <RootSiblingParent>
        <PersistGate persistor={persistor}>
          <StatusBar style="auto" />
          <Navigation />
        </PersistGate>
      </RootSiblingParent>
    </Provider>
  );
}
