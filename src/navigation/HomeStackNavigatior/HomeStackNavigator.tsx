import React from "react";
import { RootStackParamList } from "../../types";
import { Home } from "../../screens/Home";
import Horses from "../../screens/Horses";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
