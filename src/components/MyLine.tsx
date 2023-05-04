import {
  FlexStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  lineStyle?: StyleProp<ViewStyle>;
  width?: FlexStyle["width"];
};

const MyLine = ({ width = "100%", containerStyle, lineStyle }: Props) => {
  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        },
        ,
        containerStyle,
      ]}
    >
      <View
        style={[
          {
            marginTop: 10,
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

const styles = StyleSheet.create({});
