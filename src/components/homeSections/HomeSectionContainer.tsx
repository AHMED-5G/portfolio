import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";
import { theme } from "../../constants/myColors";
import MyLine from "../MyLine";

type Props = { content: ReactElement; line?: boolean };

const HomeSectionContainer = ({ content, line = true }: Props) => {
  return (
    <View
      style={{
        marginLeft: 10,
        flexDirection: theme.localizationFlexDirection,
      }}
    >
      <View>
        <View>{content}</View>
        {line && <MyLine width="90%" />}
      </View>
    </View>
  );
};

export default HomeSectionContainer;

const styles = StyleSheet.create({});
