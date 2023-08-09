import { View } from "react-native";
import React, { ReactElement } from "react";
import MyLine from "../MyLine";
import { wwrosw } from "../../constants/Layout";

type Props = { content: ReactElement; line?: boolean };

const HomeSectionContainer = ({ content, line = true }: Props) => {
  return (
    <View
      style={{
        marginLeft: wwrosw(10),
      }}
    >
      {content}
      {line && <MyLine width="90%" />}
    </View>
  );
};

export default HomeSectionContainer;
