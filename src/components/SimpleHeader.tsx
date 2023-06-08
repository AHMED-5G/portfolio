import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../constants/myColors";
import MyLine from "./MyLine";

type Props = { title: string };

const SimpleHeader = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginLeft: 10,
          flexDirection: 'row'
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
    height: 50,
    justifyContent: "center",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  sectionHeadText: {
    fontSize: 22,

    fontWeight: "800",
  },
});
