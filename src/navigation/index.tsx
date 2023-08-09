/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Platform, SafeAreaView } from "react-native";
import {
  InitialStateInterface,
  RootStackParamList,
  RootTabParamList,
} from "../types";
import MyTabBar from "./MyTabBar";
import { FeedScreen } from "../screens/FeedScreen";
import HomeStackNavigator from "./HomeStackNavigatior/HomeStackNavigator";
import { SettingsScreen } from "../screens/SettingsScreen";
import { useAppSelector } from "../redux/Hooks/hooks";
import { loadLocale } from "../translation/i18n";
import YachtStackNavigation from "./YachtStackNavigation/YachtStackNavigation";
import MarketStackNavigator from "./MarketStackNavigator/MarketStackNavigator";
import { StatusBar } from "react-native";
import HotelDetails from "../screens/HotelDetails";
import { theme } from "../constants/myColors";
import LoadingIndicator from "../components/mini/LoadingIndicator";
import { View } from "../components/Themed";
import ContributorsDetails from "../screens/ContributorsDetails";
export default function Navigation() {
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );
  const [appIsReady, setAppIsReady] = React.useState(false);

  function setConfigures() {
    theme.readingTheme = state.settings.savedReadingTheme;
    loadLocale(state.language);
    theme.darkTheme = state.settings.userConfiguration?.darkTheme;
  }

  React.useEffect(() => {
    async function prepare() {
      try {
        setConfigures();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return <LoadingIndicator />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={!theme.darkTheme ? "dark-content" : "light-content"}
      />
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          backgroundColor: theme.baseBackground(),
        }}
      >
        <RootNavigator />
      </SafeAreaView>
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
        name="HotelDetails"
        component={HotelDetails}
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
      <Stack.Screen
        name="ContributorsDetails"
        component={ContributorsDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStackNavigator"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => {
        return (
          <View
            style={{
              backgroundColor: theme.darkTheme ? "#141414" : "#EEE",
            }}
          >
            <MyTabBar {...props} />
          </View>
        );
      }}
    >
      <BottomTab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={() => ({
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
