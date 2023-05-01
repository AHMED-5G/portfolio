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
import { AppRegistry } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <LoadingIndicator />;
  }

  // Initialize Apollo Client

  const client = new ApolloClient({
    uri: "https://meet-shark-48.hasura.app/v1/graphql",

    cache: new InMemoryCache(),
  });

  return (
    <Provider store={store}>
      <RootSiblingParent>
        <SafeAreaProvider>
          <PersistGate persistor={persistor}>
            <StatusBar style="auto" />
            <ApolloProvider client={client}>
              <Navigation colorScheme={colorScheme} />
            </ApolloProvider>
          </PersistGate>
        </SafeAreaProvider>
      </RootSiblingParent>
    </Provider>
  );
}
