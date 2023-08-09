import {  Text, TextProps } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import {
  IBMPlexSansArabicBold,
  IBMPlexSansArabicMedium,
  IBMPlexSansArabicRegular,
} from "../../assets/fonts";

export interface MyTextInterface extends TextProps {
  text: string | number | undefined;
  props?: TextProps;
}

export enum AvailableFontFamily {
  "IBMPlexSansArabicRegular" = "IBMPlexSansArabicRegular",
}

const MyText = ({ text, ...props }: MyTextInterface) => {
  const [fontsLoaded] = useFonts({
    IBMPlexSansArabicRegular: IBMPlexSansArabicRegular,
    IBMPlexSansArabicMedium: IBMPlexSansArabicMedium,
    IBMPlexSansArabicBold: IBMPlexSansArabicBold,
  });

  if (!fontsLoaded) {
    return (
      <Text
        {...props}
        style={[
          props.style,
          {
            fontFamily: undefined,
          },
        ]}
      >
        {text}
      </Text>
    );
  }

  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "IBMPlexSansArabicMedium",
        },
        props.style,
      ]}
    >
      {text}
    </Text>
  );
};

export default MyText;

