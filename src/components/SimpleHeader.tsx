import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../constants/Layout";
import { myColors, theme } from "../constants/myColors";
import MyLine from "./MyLine";

type Props = { title: string };

const SimpleHeader = ({ title }: Props) => {
  return (
    <View
      style={{
        alignContent: "flex-start",
        width: "100%",
        height: 50,
        justifyContent: "center",
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
      }}
    >
      <View
        style={{
          marginLeft: 10,
          flexDirection: theme.localizationFlexDirection,
        }}
      >
        <Text style={styles.sectionHeadText}>{title}</Text>
      </View>
      <MyLine />
    </View>
  );
};

export default SimpleHeader;

const styles = StyleSheet.create({
  sectionHeadText: {
    fontSize: 22,
    color: theme.primaryText,
    fontWeight: "800",
  },
});
