import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { tabContainerStyle, tabColor, tabTextStyle } from "./styles";

type Props = {
  isFocused: boolean;
  label: string;
};

const AccountTab = (props: Props) => {
  return (
    <View style={tabContainerStyle}>
      <Ionicons
        name="person-outline"
        size={30}
        color={tabColor(props.isFocused)}
      />
      <Text style={tabTextStyle(props.isFocused)}>{/* {props.label} */}</Text>
    </View>
  );
};

export { AccountTab };

const styles = StyleSheet.create({});
