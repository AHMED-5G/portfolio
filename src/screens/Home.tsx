import { StyleSheet, View } from "react-native";
import React from "react";
import {RootTabScreenProps } from "../types";

function Home({ navigation }:RootTabScreenProps<"Home">) {
  return <View></View>;
}
export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
