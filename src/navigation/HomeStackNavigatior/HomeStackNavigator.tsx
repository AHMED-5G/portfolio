import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { RootStackParamList } from "../../types";
import { Home } from "../../screens/Home";
import HotelDetails from "../../screens/HotelDetails";
import Horses from "../../screens/Horses";
import HorseDetails from "../../screens/HorseDetails";

import MarketStackNavigator from "../MarketStackNavigator/MarketStackNavigator";
import ContributorsDetails from "../../screens/ContributorsDetails";
import Animated from "react-native-reanimated";
import {
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Horses"
        component={Horses}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="HorseDetails"
        component={HorseDetails}
        sharedElements={(route) => {
          return [route.params.id];
        }}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
