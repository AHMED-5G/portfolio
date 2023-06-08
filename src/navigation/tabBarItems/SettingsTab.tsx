import { StyleProp, StyleSheet,  View } from "react-native";
import React from "react";
import {  Feather } from "@expo/vector-icons";
import { tabContainerStyle, tabColor,  } from "./styles";
import TabText from "./TabText";

type Props = {
  isFocused: boolean;
  label: string;
};

const SettingsTab = (props: Props) => {
  return (
    <View style={tabContainerStyle}>
      <Feather disabled name="settings" size={34} color={tabColor(props.isFocused)} />
      {/* <TabText isFocused={props.isFocused} /> */}
    </View>
  );
};

export { SettingsTab };

const styles = StyleSheet.create({});
