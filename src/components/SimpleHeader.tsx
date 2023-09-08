import { StyleSheet, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import MyLine from "./MyLine";
import { hwrosh, wwrosw } from "../constants/Layout";
import MyText from "./MyText";
import { useFonts } from "expo-font";
import {
  IBMPlexSansArabicRegular,
  IBMPlexSansArabicMedium,
  IBMPlexSansArabicBold,
} from "../../assets/fonts";
import LoadingIndicator from "./mini/LoadingIndicator";

type Props = { title: string };

const SimpleHeader = ({ title }: Props) => {
  const [fontsLoaded] = useFonts({
    IBMPlexSansArabicRegular: IBMPlexSansArabicRegular,
    IBMPlexSansArabicMedium: IBMPlexSansArabicMedium,
    IBMPlexSansArabicBold: IBMPlexSansArabicBold,
  });
  if (!fontsLoaded) return <LoadingIndicator />;

  return (
    <View style={[styles.container, { height: hwrosh(50) }]}>
      <View
        style={{
          marginLeft: wwrosw(10),
          flexDirection: "row",
        }}
      >
        <MyText
          text={title}
          style={[
            {
              fontSize: theme.fontSize.s22,
              color: theme.baseTextColor(),
              fontFamily: "IBMPlexSansArabicBold",
              letterSpacing: 0.1,
            },
          ]}
        />
      </View>
      <MyLine />
    </View>
  );
};

export default SimpleHeader;

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    width: "100%",

    justifyContent: "center",
    // borderBottomRightRadius: averageRatio(5),
    // borderBottomLeftRadius: averageRatio(5),
  },
});
