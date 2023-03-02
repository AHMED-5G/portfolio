import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FeedTab, HomeTab, SettingsTab } from "./tabBarItems";
import { myColors } from "../constants/myColors";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  interpolate,
  Extrapolation,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import DrawerComponent from "./tabBarItems/DrawerComponent";

import RightTabComponent from "./tabBarItems/RightTabComponent";
import TabBarFooter from "./tabBarItems/TabBarFooter";

interface TabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const MyTabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const keyboardDidShow = () => setKeyboardStatus(true);
  const keyboardDidHide = () => setKeyboardStatus(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);
  }, []);
  const barOpenHeight = 300;
  let openTabProgress = useSharedValue(0);
  const [tapOpenState, setTapOpenState] = useState(false);
  let iconRotate = useDerivedValue(() => {
    return interpolate(
      openTabProgress.value,
      [0, 1],
      [0, 180],
      Extrapolation.CLAMP
    );
  });

  const openTab = useCallback(() => {
    openTabProgress.value = withTiming(1, undefined, (isFinished) => {
      runOnJS(setTapOpenState)(true);
    });
  }, []);
  const closTab = useCallback(() => {
    openTabProgress.value = withTiming(0, undefined, (isFinished) => {
      runOnJS(setTapOpenState)(false);
    });
  }, []);
  const tabReanimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      openTabProgress.value,
      [0, 1],
      [50, barOpenHeight],
      {
        extrapolateRight: Extrapolation.CLAMP,
      }
    );
    return {
      height,
      // flexGrow: flexGrow.value
    };
  });

  const upIconReanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: iconRotate.value + "deg",
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          // height: 50,
          borderRadius: 10,
          backgroundColor: myColors.white,
          flexDirection: "row",
          display: !keyboardStatus ? "flex" : "none",
          justifyContent: "center",
          alignContent: "center",
          // width: width ,
        },
        tabReanimatedStyle,
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          !tapOpenState ? openTab() : closTab();
        }}
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",

          width: "10%",
        }}
      >
        <Animated.View
          style={[
            {
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            },
            upIconReanimatedStyle,
          ]}
        >
          <AntDesign name="up" size={34} color="black" />
        </Animated.View>
      </TouchableOpacity>

      <View
        style={{
          width: "90%",
          marginBottom: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                // navigation.navigate({ name: route.name, merge: true });
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                accessibilityHint={label.toString()}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, alignItems: "center" }}
                key={label.toString()}
              >
                {label == "Home" ? (
                  <HomeTab key={label} {...{ label, isFocused }} />
                ) : label == "Feed" ? (
                  <FeedTab key={label} {...{ label, isFocused }} />
                ) : label == "Settings" ? (
                  <SettingsTab key={label} {...{ label, isFocused }} />
                ) : null}
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <DrawerComponent />
          <RightTabComponent />
        </View>
        <TabBarFooter />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
export default MyTabBar;
