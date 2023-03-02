import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { tabContainerStyle, tabColor, tabTextStyle } from "./styles";


type Props = {
  isFocused: boolean;
  label: string;
};

const ScanTab = ({ ...props }: Props) => {
  return (
    <View style={[tabContainerStyle, { marginTop: 0 }]}>
      <Ionicons name="scan" size={34} color={tabColor(props.isFocused)} />
      <Text style={tabTextStyle(props.isFocused)}>{/* {props.label} */}</Text>
    </View>
  );
};

export  {ScanTab};

const styles = StyleSheet.create({});
