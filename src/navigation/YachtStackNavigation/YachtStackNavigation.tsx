import React from "react";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "../../types";
import { Yachts } from "../../screens/Yachts";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator<RootStackParamList>();

const YachtStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Yachts"
        component={Yachts}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default YachtStackNavigation;

const styles = StyleSheet.create({});
