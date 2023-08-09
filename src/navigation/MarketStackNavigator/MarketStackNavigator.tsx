
import React from "react";
import { RootStackParamList } from "../../types";

import MarketHomeScreen from "../../screens/MarketHomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator<RootStackParamList>();

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
