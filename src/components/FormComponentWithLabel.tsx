import { Text, View } from "react-native";
import React, { ReactNode } from "react";
import { fontRatio, hwrosh } from "../constants/Layout";
import { theme } from "../constants/myColors";

type Props = {
  CustomTextInput: ReactNode;
  label: string;
};

const FormComponentWithLabel = ({ CustomTextInput, label }: Props) => {
  return (
    <View style={{ marginTop: hwrosh(5) }}>
      <View>
        <Text style={{ fontSize: fontRatio(18), color: theme.baseTextColor() }}>
          {label}
        </Text>
      </View>
      <View style={{ marginTop: hwrosh(5) }}>{CustomTextInput}</View>
    </View>
  );
};

export default FormComponentWithLabel;
