import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Home } from "../../screens/Home";
import HotelDetails from "../../screens/HotelDetails";
import Horses from "../../screens/Horses";
import HorseDetails from "../../screens/HorseDetails";
import { TransitionSpecs } from "@react-navigation/stack";
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
