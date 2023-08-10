import { Text, View } from "react-native";
import React, { ReactElement } from "react";
import { hwrosh, width } from "../../../constants/Layout";

type Props = {
  title: string;
  content: ReactElement;
};
const SectionContainer = ({ title, content }: Props) => {
  return (
    <View style={{ marginTop: hwrosh(20), width: width * 0.9 }}>
      <Text>{title}</Text>
      <View style={{ marginTop: hwrosh(10) }}>{content}</View>
    </View>
  );
};

export default SectionContainer;
