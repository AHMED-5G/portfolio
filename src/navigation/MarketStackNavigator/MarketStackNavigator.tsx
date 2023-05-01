import { StyleSheet } from "react-native";
import React from "react";
import { RootStackParamList } from "../../types";
import { Home } from "../../screens/Home";

import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import MarketHomeScreen from "../../screens/MarketHomeScreen";
const Stack = createSharedElementStackNavigator<RootStackParamList>();

const MarketStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MarketHomeScreen"
        component={MarketHomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MarketStackNavigator;

const styles = StyleSheet.create({});
