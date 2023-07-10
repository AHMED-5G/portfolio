import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../constants/myColors";
import { fontRatio, hwrosh, width, wwrosw } from "../../constants/Layout";

type Props = { text: string };

const HomeSectionTitle = ({ text }: Props) => {
  return (
    <View style={[styles.hotelsTextContainer, { flexDirection: "row" }]}>
      <Text
        accessibilityRole="header"
        style={[styles.sectionTitleText, { color: theme.baseTextColor() }]}
      >
        {text}
      </Text>
    </View>
  );
};

export default HomeSectionTitle;

const styles = StyleSheet.create({
  hotelsTextContainer: {
    marginTop: hwrosh(10),
    marginBottom: hwrosh(5),
    alignSelf: "flex-start",
    width: width,
  },
  sectionTitleText: {
    fontSize: fontRatio(25),
    fontWeight: "700",
    alignSelf: "flex-start",
    marginTop: hwrosh(10),
    marginLeft: wwrosw(10),
    marginRight: wwrosw(10),
  },
});
