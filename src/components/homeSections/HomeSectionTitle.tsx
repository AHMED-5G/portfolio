import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../constants/myColors";
import { width } from "../../constants/Layout";

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
const marginValue = 10;
const styles = StyleSheet.create({
  hotelsTextContainer: {
    marginTop: 10,
    marginBottom: 5,
    alignSelf: "flex-start",
    width: width,
  },
  sectionTitleText: {
    fontSize: 25,
    fontWeight: "700",
    alignSelf: "flex-start",
    marginTop: 10,
    marginLeft: marginValue,
    marginRight: marginValue,
  },
});
