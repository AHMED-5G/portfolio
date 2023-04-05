/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";

import MyTabBar from "./MyTabBar";
import { FeedScreen } from "../screens/FeedScreen";
import HomeStackNavigator from "./HomeStackNavigatior/HomeStackNavigator";
import { SettingsScreen } from "../screens/SettingsScreen";
import { useAppSelector } from "../redux/Hooks/hooks";
import { loadLocale } from "../translation/i18n";
import YachtStackNavigation from "./YachtStackNavigation/YachtStackNavigation";
import MarketStackNavigator from "./MarketStackNavigator/MarketStackNavigator";
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const { language } = useAppSelector((state) => state.dataSlice);

  loadLocale(language);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="YachtStackNavigation"
        component={YachtStackNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MarketStackNavigator"
        component={MarketStackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeStackNavigator"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
      tabBar={(props) => {
        return <MyTabBar {...props} />;
      }}
    >
      <BottomTab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={({
          navigation,
        }: RootTabScreenProps<"HomeStackNavigator">) => ({
          title: "Home",
        })}
      />
      <BottomTab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: "Feed",
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
