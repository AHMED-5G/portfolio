import {
  FlexStyle,
  StyleProp,


  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { hwrosh } from "../constants/Layout";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  lineStyle?: StyleProp<ViewStyle>;
  width?: FlexStyle["width"];
};

const MyLine = ({ width = "100%", containerStyle, lineStyle }: Props) => {
  return (
    <View style={[{}, containerStyle]}>
      <View
        style={[
          {
            marginTop: hwrosh(10),
            height: 1,
            backgroundColor: "grey",
            opacity: 0.2,
            width: width ?? "100%",
          },
          lineStyle,
        ]}
      />
    </View>
  );
};

export default MyLine;

