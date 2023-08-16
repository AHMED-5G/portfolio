import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { tabContainerStyle, tabColor } from "./styles";
import { theme } from "../../constants/theme";
import { circularRatio } from "../../constants/Layout";

type Props = {
  isFocused: boolean;
  label: string;
};

const FeedTab = (props: Props) => {
  return (
    <View style={tabContainerStyle}>
      <MaterialCommunityIcons
        disabled
        name="newspaper-variant"
        size={circularRatio(37)}
        style={{
          transform: theme.iconLocalizationTransform(),
        }}
        color={tabColor(props.isFocused)}
      />
      {/* <TabText isFocused={props.isFocused} /> */}
    </View>
  );
};

export { FeedTab };
