import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../constants/myColors";
import MyLine from "./MyLine";
import {  fontRatio, hwrosh, wwrosw } from "../constants/Layout";

type Props = { title: string };

const SimpleHeader = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginLeft: wwrosw(10),
          flexDirection: "row",
        }}
      >
        <Text style={[styles.sectionHeadText, { color: theme.primaryText() }]}>
          {title}
        </Text>
      </View>
      <MyLine />
    </View>
  );
};

export default SimpleHeader;

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    width: "100%",
    height: hwrosh(50),
    justifyContent: "center",
    // borderBottomRightRadius: averageRatio(5),
    // borderBottomLeftRadius: averageRatio(5),
  },
  sectionHeadText: {
    fontSize: fontRatio(22),
    fontWeight: "800",
  },
});
