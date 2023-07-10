import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { myColors, theme } from "../../constants/myColors";
import { i18n } from "../../translation/i18n";
import DrawerProfileCard from "../../components/DrawerProfileCard";
import MyLine from "../../components/MyLine";
import {
  circularRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../../constants/Layout";
import {
  drawerContentContainerHeight,
  drawerProfileCardHeight,
} from "../constants";

const DrawerComponent = () => {
  const iconRadius = circularRatio(37);
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
        <TouchableOpacity style={styles.drawerItemContainer}>
          <View style={styles.drawerIconContainer}>
            <Feather name="user" color={theme.iconColor()} size={iconRadius} />
          </View>
          <View style={styles.drawerTextContainer}>
            <Text
              style={[styles.drawerItemText, { color: theme.baseTextColor() }]}
            >
              {i18n.t("profile")}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.drawerItemContainer, { flexDirection: "row" }]}
        >
          <View style={styles.drawerIconContainer}>
            <Feather name="mail" color={theme.iconColor()} size={iconRadius} />
          </View>
          <View style={styles.drawerTextContainer}>
            <Text
              style={[styles.drawerItemText, { color: theme.baseTextColor() }]}
            >
              {i18n.t("messages")}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.drawerItemContainer]}>
          <View
            style={[
              styles.drawerIconContainer,
              {
                transform: theme.iconLocalizationTransform(),
              },
            ]}
          >
            <Feather name="users" size={iconRadius} color={theme.iconColor()} />
          </View>
          <View style={styles.drawerTextContainer}>
            <Text
              style={[styles.drawerItemText, { color: theme.baseTextColor() }]}
            >
              {i18n.t("friends")}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  drawerContentContainer: {
    height: drawerContentContainerHeight,
  },
  drawerItemContainer: {
    marginLeft: wwrosw(10),
    marginBottom: hwrosh(10),
    flexDirection: "row",
  },
  drawerIconContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: wwrosw(48),
    height: hwrosh(48),
  },
  drawerTextContainer: {
    marginLeft: wwrosw(10),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  drawerItemText: {
    fontSize: fontRatio(22),
    color: myColors.black,
    fontWeight: "600",
  },
  drawerItemIconStyle: {
    width: wwrosw(40),
    height: hwrosh(40),
    maxWidth: wwrosw(40),
    maxHeight: hwrosh(40),
    overflow: "hidden",
  },
});
