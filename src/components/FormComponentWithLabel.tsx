import { Text, View } from "react-native";
import React, { ReactNode } from "react";
import { hwrosh } from "../constants/Layout";
import { theme } from "../constants/theme";

type Props = {
  CustomTextInput: ReactNode;

  label: string;
};

const FormComponentWithLabel = ({ CustomTextInput, label }: Props) => {
  return (
    <View style={{ marginTop: hwrosh(5) }}>
      <View style={{}}>
        <Text
          style={{ fontSize: theme.fontSize.s18, color: theme.baseTextColor() }}
        >
          {label}
        </Text>
      </View>
      <View
        style={{
          marginTop: hwrosh(0),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {CustomTextInput}
        {/* <View style={{ marginTop: hwrosh(28) }}>{iconsView}</View> */}
      </View>
    </View>
  );
};

export default FormComponentWithLabel;
