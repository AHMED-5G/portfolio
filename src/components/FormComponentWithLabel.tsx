import { Text, View } from "react-native";
import React, { ReactNode } from "react";
import {  hwrosh } from "../constants/Layout";
import { theme } from "../constants/theme";

type Props = {
  CustomTextInput: ReactNode;
  iconsView?: ReactNode;
  label: string;
};

const FormComponentWithLabel = ({
  CustomTextInput,
  label,
  iconsView,
}: Props) => {
  return (
    <View style={{ marginTop: hwrosh(5), width: "100%" }}>
      <View>
        <Text style={{ fontSize: theme.fontSize.s18, color: theme.baseTextColor() }}>
          {label}
        </Text>
      </View>
      <View
        style={{
          marginTop: hwrosh(5),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {CustomTextInput}
        {iconsView}
      </View>
    </View>
  );
};

export default FormComponentWithLabel;
