import { Text } from "react-native";
import React from "react";
import { tabTextStyle } from "./styles";
type Props = {
  isFocused: boolean;
};

const TabText = ({ isFocused }: Props) => {
  return <Text style={tabTextStyle(isFocused)}>{/* {props.label} */}</Text>;
};

export default TabText;
