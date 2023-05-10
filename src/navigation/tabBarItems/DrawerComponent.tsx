import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather, Fontisto, FontAwesome5 } from "@expo/vector-icons";
import { myColors, theme } from "../../constants/myColors";
import { i18n } from "../../translation/i18n";
import {
  getRandomOneItemFromList,
  shuffleArray,
} from "../../utils/helperFunctions";
import { contributors } from "../../../dummy/Contributors";
import DrawerProfileCard from "../../components/DrawerProfileCard";
import { User } from "../../types";
import MyLine from "../../components/MyLine";
import { width } from "../../constants/Layout";
import { transform } from "@babel/core";

type Props = {};

const DrawerComponent = (props: Props) => {
  // const userData = getRandomOneItemFromList(contributors) as User;
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          justifyContent: "flex-start",
          alignContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: theme.localizationFlexDirection,
          marginLeft: 20,
        }}
      >
        <DrawerProfileCard />
      </View>
      <MyLine />
      <TouchableOpacity
        style={[
          styles.drawerItemContainer,
          { flexDirection: theme.localizationFlexDirection },
        ]}
      >
        <View style={styles.drawerIconContainer}>
          <Feather name="user" color="black" size={37} />
        </View>
        <View style={styles.drawerTextContainer}>
          <Text style={styles.drawerItemText}>{i18n.t("profile")}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.drawerItemContainer,
          { flexDirection: theme.localizationFlexDirection },
        ]}
      >
        <View style={styles.drawerIconContainer}>
          <Feather name="mail" color="black" size={37} />
        </View>
        <View style={styles.drawerTextContainer}>
          <Text style={styles.drawerItemText}>{i18n.t("messages")}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.drawerItemContainer,
          { flexDirection: theme.localizationFlexDirection },
        ]}
      >
        <View
          style={[
            styles.drawerIconContainer,
            {
              transform: theme.iconLocalizationTransform(),
            },
          ]}
        >
          <Feather name="users" size={37} color="black" />
        </View>
        <View style={styles.drawerTextContainer}>
          <Text style={styles.drawerItemText}>{i18n.t("friends")}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  drawerItemContainer: {
    marginLeft: 10,
    marginBottom: 10,
  },
  drawerIconContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
  },
  drawerTextContainer: {
    marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  drawerItemText: {
    fontSize: 22,
    color: myColors.black,
    fontWeight: "600",
  },
  drawerItemIconStyle: {
    // fontSize: 32,
    // color: myColors.black,
    width: 40,
    height: 40,
    maxWidth: 40,
    maxHeight: 40,
    overflow: "hidden",
  },
});
