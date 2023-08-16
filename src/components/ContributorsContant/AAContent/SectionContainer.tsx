import { Text, View } from "react-native";
import React from "react";
import { fontRatio, hwrosh, width } from "../../../constants/Layout";
import { SectionContainerInterface } from "../../../types";
import { theme } from "../../../constants/theme";

const SectionContainer = ({ title, content }: SectionContainerInterface) => {
  return (
    <View style={{ marginTop: hwrosh(40), width: width * 0.9 }}>
      <Text
        style={{
          fontSize: fontRatio(14),
          fontWeight: "700",
          color: theme.cardText(),
        }}
      >
        {title}
      </Text>
      <View style={{ marginTop: hwrosh(5) }}>{content}</View>
    </View>
  );
};

export default SectionContainer;
