import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { FeedTab, HomeTab } from "./tabBarItems";
import { myColors } from "../constants/myColors";
import { FeedScreen } from "../screens/FeedScreen";

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

  return (
    <View
      style={{
        height: 50,
        borderRadius: 10,
        backgroundColor: myColors.Baltic,
        flexDirection: "row",
        display: !keyboardStatus ? "flex" : "none",
      }}
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
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
            key={label.toString()}
          >
            {/* <View style={styles.tabContainer}> */}
            {label == "Home" ? (
              <HomeTab key={label} {...{ label, isFocused }} />
            ) : label == "Feed" ? (
              <FeedTab key={label} {...{ label, isFocused }} />
            ) : null}
            {/* </View> */}
          </TouchableOpacity>
        );
      })}
    </View>
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
