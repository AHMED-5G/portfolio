import { StyleSheet, View } from "react-native";
import React from "react";
import { theme } from "../../constants/theme";
import { fontRatio, hwrosh, width, wwrosw } from "../../constants/Layout";
import MyText from "../MyText";
import { useFonts } from "expo-font";
import {
  IBMPlexSansArabicRegular,
  IBMPlexSansArabicMedium,
  IBMPlexSansArabicBold,
} from "../../../assets/fonts";
import LoadingIndicator from "../mini/LoadingIndicator";

type Props = { text: string };

const HomeSectionTitle = ({ text }: Props) => {
  const [fontsLoaded] = useFonts({
    IBMPlexSansArabicRegular: IBMPlexSansArabicRegular,
    IBMPlexSansArabicMedium: IBMPlexSansArabicMedium,
    IBMPlexSansArabicBold: IBMPlexSansArabicBold,
  });
  if (!fontsLoaded) return <LoadingIndicator />;
  return (
    <View
      style={[
        styles.hotelsTextContainer,
        { marginTop: hwrosh(10), marginBottom: hwrosh(5) },
      ]}
    >
      <MyText
        accessibilityRole="header"
        style={[
          styles.sectionTitleText,
          {
            fontSize: fontRatio(20),
            color: theme.baseTextColor(),
            marginTop: hwrosh(10),
            marginLeft: wwrosw(10),
            marginRight: wwrosw(10),
          },
        ]}
        text={text}
      />
    </View>
  );
};

export default HomeSectionTitle;

const styles = StyleSheet.create({
  hotelsTextContainer: {
    alignSelf: "flex-start",
    width: width,
  },
  sectionTitleText: {
    alignSelf: "flex-start",
    fontFamily: "IBMPlexSansArabicBold",
  },
});
