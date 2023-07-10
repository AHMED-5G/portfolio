import { StyleProp, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { tabContainerStyle, tabColor, tabTextStyle } from "./styles";
import TabText from "./TabText";
import { circularRatio } from "../../constants/Layout";

type Props = {
  isFocused: boolean;
  label: string;
};

const HomeTab = (props: Props) => {
  return (
    <View style={tabContainerStyle}>
      <AntDesign disabled name="home" size={circularRatio(37)} color={tabColor(props.isFocused)} />
      {/* <TabText isFocused={props.isFocused} /> */}
    </View>
  );
};

export { HomeTab };

const styles = StyleSheet.create({});
