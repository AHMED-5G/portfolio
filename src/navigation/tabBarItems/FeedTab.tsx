import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { tabContainerStyle, tabColor, tabTextStyle } from "./styles";
import TabText from "./TabText";
import { theme } from "../../constants/myColors";

type Props = {
  isFocused: boolean;
  label: string;
};

const FeedTab = (props: Props) => {
  return (
    <View style={[tabContainerStyle]}>
      <MaterialCommunityIcons
        name="newspaper-variant"
        size={37}
        style={{
          transform: theme.iconLocalizationTransform(),
          // transform: [{ rotateY: theme.localizationRtl ? "180deg" : "0deg" }],
        }}
        color={tabColor(props.isFocused)}
      />
      <TabText isFocused={props.isFocused} />
    </View>
  );
};

export { FeedTab };

const styles = StyleSheet.create({});
