import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Home } from "../../screens/Home";
import HotelDetails from "../../screens/HotelDetails";
import Horses from "../../screens/Horses";
import HorseDetails from "../../screens/HorseDetails";
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
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
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
