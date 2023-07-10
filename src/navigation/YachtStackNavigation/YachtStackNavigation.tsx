import { StyleSheet } from "react-native";
import React from "react";
import { RootStackParamList } from "../../types";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Yachts } from "../../screens/Yachts";
const Stack = createSharedElementStackNavigator<RootStackParamList>();

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
