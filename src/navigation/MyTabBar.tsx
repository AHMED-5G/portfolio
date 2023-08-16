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
import { Keyboard, TouchableOpacity, View } from "react-native";
import { FeedTab, HomeTab, SettingsTab } from "./tabBarItems";
import { theme } from "../constants/theme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  useDerivedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import DrawerComponent from "./tabBarItems/DrawerComponent";
import TabBarFooter from "./tabBarItems/TabBarFooter";
import MyLine from "../components/MyLine";
import {
  averageRatio,
  circularRatio,
  hwrosh,
  width,
  wwrosw,
} from "../constants/Layout";
import { totalOpenTabBarHeight } from "./constants";

interface TabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const MyTabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const keyboardDidShow = () => setKeyboardStatus(true);
  const keyboardDidHide = () => setKeyboardStatus(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);
  }, []);

  const barOpenHeight = totalOpenTabBarHeight;
  const openTabProgress = useSharedValue(0);
  const iconRotate = useDerivedValue(() => {
    return interpolate(
      openTabProgress.value,
      [0, 1],
      [0, 180],
      Extrapolation.CLAMP,
    );
  });

  const openTab = useCallback(() => {
    openTabProgress.value = withTiming(1, {
      easing: Easing.bezier(0, 0, 0.1, 0.4),
    });
  }, []);

  const closTab = useCallback(() => {
    openTabProgress.value = withTiming(0, undefined);
  }, []);

  const tabReanimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      openTabProgress.value,
      [0, 1],
      [theme.tabBarHeight, barOpenHeight],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
    return {
      height,
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

  const tabBarTopSectionRStyle = useAnimatedStyle(() => {
    const toHeight = interpolate(
      openTabProgress.value,
      [0, 1],
      [theme.tabBarHeight, 0],
    );
    return {
      height: toHeight,
    };
  });

  const drawerContainerRStyle = useAnimatedStyle(() => {
    const toOpacity = interpolate(openTabProgress.value, [1, 0], [1, 0]);
    const toHeight = interpolate(
      openTabProgress.value,
      [0, 1],
      [0, totalOpenTabBarHeight],
    );
    return {
      opacity: toOpacity,
      height: toHeight,
    };
  });

  const upButtonPercentage = 0.15;

  return (
    <Animated.View
      style={[
        {
          borderRadius: averageRatio(10),
          backgroundColor: theme.tabBarBackground(),
          flexDirection: "row",
          display: !keyboardStatus ? "flex" : "none",
          justifyContent: "center",
          alignContent: "center",
          overflow: "hidden",
          borderWidth: 0.4,
          borderColor: theme.borderColor,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: 0,
        },
        tabReanimatedStyle,
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          openTabProgress.value < 1 ? openTab() : closTab();
        }}
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          width: width * upButtonPercentage,
          backgroundColor: theme.tabBarLeftSectionColor(),
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
          <AntDesign
            name="up"
            size={circularRatio(44)}
            color={theme.primaryText()}
          />
        </Animated.View>
      </TouchableOpacity>
      <View
        style={[
          {
            width: width * (1 - upButtonPercentage),
            marginBottom: hwrosh(20),
          },
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: "row",
              overflow: "hidden",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              // height: hwrosh(48),
            },
            tabBarTopSectionRStyle,
          ]}
        >
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
                style={{
                  flex: 1,
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  width: wwrosw(58),
                  height: hwrosh(58),
                }}
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
        </Animated.View>

        <Animated.View style={[drawerContainerRStyle]}>
          <DrawerComponent />
          <MyLine lineStyle={{ marginTop: 0 }} />
          <TabBarFooter />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default MyTabBar;
