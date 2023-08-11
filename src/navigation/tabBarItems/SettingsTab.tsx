import { View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { tabContainerStyle, tabColor } from "./styles";
import { circularRatio } from "../../constants/Layout";

type Props = {
  isFocused: boolean;
  label: string;
};

const SettingsTab = (props: Props) => {
  return (
    <View style={tabContainerStyle}>
      <Feather
        disabled
        name="settings"
        size={circularRatio(34)}
        color={tabColor(props.isFocused)}
      />
      {/* <TabText isFocused={props.isFocused} /> */}
    </View>
  );
};

export { SettingsTab };
