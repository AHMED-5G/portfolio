import { StyleSheet, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../constants/theme";
import { i18n } from "../../translation/i18n";
import DrawerProfileCard from "../../components/myTabBarComponents/DrawerProfileCard";
import MyLine from "../../components/MyLine";
import { circularRatio, wwrosw } from "../../constants/Layout";
import {
  drawerContentContainerHeight,
  drawerProfileCardHeight,
} from "../constants";

import DrawerItem, {
  DrawerItemsProps,
} from "../../components/myTabBarComponents/DrawerItem";

const DrawerComponent = () => {
  const iconRadius = circularRatio(37);
  const iconColor = theme.iconColor();
  const drawerItems: DrawerItemsProps[] = [
    {
      title: i18n.t("profile"),
      icon: <Feather name="user" color={iconColor} size={iconRadius} />,
      onPress: () => {
        console.log("DrawerComponent.tsx -> ", "PROFILE");
      },
    },
    {
      title: i18n.t("messages"),
      icon: <Feather name="mail" color={iconColor} size={iconRadius} />,
    },
    {
      title: i18n.t("friends"),
      icon: <Feather name="users" color={iconColor} size={iconRadius} />,
    },
  ];
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          justifyContent: "flex-start",
          alignContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          marginLeft: wwrosw(20),
          height: drawerProfileCardHeight,
        }}
      >
        <DrawerProfileCard />
      </View>
      <MyLine />
      <View style={styles.drawerContentContainer}>
        {drawerItems.map((item, index) => (
          <DrawerItem key={index} {...item} />
        ))}
      </View>
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  drawerContentContainer: {
    height: drawerContentContainerHeight,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
});
