import { StyleSheet,  View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import MyLine from "./MyLine";
import { fontRatio, hwrosh, wwrosw } from "../constants/Layout";
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
    <View style={styles.container}>
      <View
        style={{
          marginLeft: wwrosw(10),
          flexDirection: "row",
        }}
      >
        {/* <Text>{title}</Text> */}
        <MyText
          text={title}
          style={[
            styles.sectionHeadText,
            { color: theme.primaryText(), fontFamily: "IBMPlexSansArabicBold" },
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
    height: hwrosh(50),
    justifyContent: "center",
    // borderBottomRightRadius: averageRatio(5),
    // borderBottomLeftRadius: averageRatio(5),
  },
  sectionHeadText: {
    fontSize: fontRatio(22),
    // fontWeight: "800",
  },
});
