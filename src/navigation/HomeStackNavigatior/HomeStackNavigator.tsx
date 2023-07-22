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
type Screen1Props = StackScreenProps<RootStackParamList, "Screen1">;
type Screen2Props = StackScreenProps<RootStackParamList, "Screen2">;
const HomeStackNavigator = () => {
  function Screen1({ navigation }: Screen1Props) {
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{ width: 100, height: 150, backgroundColor: "green" }}
          sharedTransitionTag="sharedTag"
        />
        <Button
          title="Screen2"
          onPress={() => navigation.navigate("Screen2")}
        />
      </View>
    );
  }

  function Screen2({ navigation }: Screen2Props) {
    return (
      <View style={{ flex: 1, marginTop: 150 }}>
        <Animated.View
          style={{ width: 100, height: 100, backgroundColor: "green" }}
          sharedTransitionTag="sharedTag"
        />
        <Button
          title="Screen1"
          onPress={() => navigation.navigate("Screen1")}
        />
      </View>
    );
  }

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
      <Stack.Screen
        name="ContributorsDetails"
        component={ContributorsDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
