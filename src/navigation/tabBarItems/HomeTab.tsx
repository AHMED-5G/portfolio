import { StyleProp, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { tabContainerStyle, tabColor, tabTextStyle } from "./styles";
import TabText from "./TabText";

type Props = {
  isFocused: boolean;
  label: string;
};

const HomeTab = (props: Props) => {
  return (
    <View style={tabContainerStyle}>
      <AntDesign name="home" size={37} color={tabColor(props.isFocused)} />
      <TabText isFocused={props.isFocused} />
    </View>
  );
};

export { HomeTab };

const styles = StyleSheet.create({});
