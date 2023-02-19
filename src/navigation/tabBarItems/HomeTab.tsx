import { StyleProp, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { tabContainerStyle, tabColor, tabTextStyle } from "./styles";

type Props = {
  isFocused: boolean;
  label: string;
};

const HomeTab = (props: Props) => {
  return (
    <View style={tabContainerStyle}>
      <AntDesign name="home" size={34} color={tabColor(props.isFocused)} />
      <Text style={tabTextStyle(props.isFocused)}>{/* {props.label} */}</Text>
    </View>
  );
};

export { HomeTab };

const styles = StyleSheet.create({});
