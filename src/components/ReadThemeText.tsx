import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../redux/Hooks/hooks";
import { InitialStateInterface } from "../types";

type Props = {
  text: string;
};

const ReadThemeText = ({text}: Props) => {
  const { settings }: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );
  return (
    <View
      style={{
        backgroundColor: settings.savedReadingTheme.backGroundColor,
      }}
    >
      <Text
        style={{
          fontSize: settings.savedReadingTheme.fontSize,
          color: settings.savedReadingTheme.fontColor,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default ReadThemeText;

const styles = StyleSheet.create({});
