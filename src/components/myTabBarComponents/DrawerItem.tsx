import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { ReactElement } from "react";
import MyText from "../MyText";
import { myColors, theme, wwrosw } from "../../constants";

export type DrawerItemsProps = {
  icon: ReactElement;
  title: string;
  reverse?: boolean;
  onPress?: () => void;
};

const DrawerItem = ({ icon, title, reverse, onPress }: DrawerItemsProps) => {
  return (
    <TouchableOpacity
      style={[styles.drawerItemContainer, { marginLeft: wwrosw(10) }]}
      onPress={() => {
        onPress?.();
      }}
    >
      <View
        style={[
          styles.drawerIconContainer,
          {
            transform: reverse
              ? theme.iconLocalizationTransform()
              : [{ rotateY: "0deg" }],
          },
        ]}
      >
        {icon}
      </View>
      <View style={[styles.drawerTextContainer, { marginLeft: wwrosw(10) }]}>
        <MyText
          style={[styles.drawerItemText, { color: theme.baseTextColor() }]}
          text={title}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  drawerItemContainer: {
    flexDirection: "row",
  },
  drawerItemText: {
    fontSize: theme.fontSize.s22,
    color: myColors.black,
    fontWeight: "600",
  },
  drawerIconContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  drawerTextContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
