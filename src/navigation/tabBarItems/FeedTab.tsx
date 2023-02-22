import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { tabContainerStyle, tabColor, tabTextStyle } from "./styles";

type Props = {
  isFocused: boolean;
  label: string;
};

const FeedTab = (props: Props) => {
  return (
    <View style={tabContainerStyle}>
      <MaterialCommunityIcons
        name="newspaper-variant"
        size={30}
        color={tabColor(props.isFocused)}
      />
      <Text style={tabTextStyle(props.isFocused)}>{/* {props.label} */}</Text>
    </View>
  );
};

export { FeedTab };

const styles = StyleSheet.create({});
