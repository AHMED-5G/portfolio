import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../constants/Layout";
import { myColors } from "../constants/myColors";
import MyLine from "./MyLine";

type Props = { title: string };

const SimpleHeader = ({ title }: Props) => {
  return (
    <View
      style={{
        marginTop: 10,
        alignContent: "flex-start",
        width,
      }}
    >
      <Text style={styles.sectionHeadText}>{title}</Text>
      <MyLine />
    </View>
  );
};

export default SimpleHeader;

const styles = StyleSheet.create({
  sectionHeadText: {
    marginLeft: 15,
    fontSize: 22,
    color: myColors.black,
    fontWeight: "800",
  },
});
