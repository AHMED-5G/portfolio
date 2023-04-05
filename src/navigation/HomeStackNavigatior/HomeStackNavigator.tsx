import { StyleSheet } from "react-native";
import React from "react";
import { RootStackParamList } from "../../types";
import { Home } from "../../screens/Home";
import HotelDetails from "../../screens/HotelDetails";
import Horses from "../../screens/Horses";
import HorseDetails from "../../screens/HorseDetails";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import MarketStackNavigator from "../MarketStackNavigator/MarketStackNavigator";
const Stack = createSharedElementStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HotelDetails"
        component={HotelDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Horses"
        component={Horses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HorseDetails"
        component={HorseDetails}
        sharedElements={(route) => {
          return [route.params.id];
        }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
