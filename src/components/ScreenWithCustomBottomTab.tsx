import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import CustomBottomTab from "./CustomBottomTab";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { theme } from "../constants/myColors";

type Props = {
  CustomBottomTabComponents?: ReactNode[];
  navigation: StackNavigationProp<RootStackParamList>;
  content?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const ScreenWithCustomBottomTab = ({
  navigation,
  CustomBottomTabComponents,
  content,
  style,
}: Props) => {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: theme.baseBackground(),
        },
        style,
      ]}
    >
      {content}
      <CustomBottomTab
        navigation={navigation}
        components={CustomBottomTabComponents}
      />
    </View>
  );
};

export default ScreenWithCustomBottomTab;

const styles = StyleSheet.create({});
