import React from "react";
import { View, ViewStyle } from "react-native";
import { hwrosh } from "../constants";
import MyLine from "./MyLine";

type HelpSectionContainerProps = {
  titleComponent: React.ReactNode;
  content: React.ReactNode;
  containerStyle?: ViewStyle;
};

const HelpSectionContainer: React.FC<HelpSectionContainerProps> = ({
  titleComponent,
  content,
  containerStyle,
}) => {
  return (
    <View style={[{ marginTop: hwrosh(10) }, containerStyle]}>
      {titleComponent}
      {content}
      <MyLine />
    </View>
  );
};

export default HelpSectionContainer;
