import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../constants/myColors";
import { width } from "../../constants/Layout";

type Props = { text: string };

const HomeSectionTitle = ({ text }: Props) => {
  return (
    <View
      style={[
        styles.hotelsTextContainer,
        { flexDirection: theme.localizationFlexDirection },
      ]}
    >
      <Text accessibilityRole="header" style={styles.sectionTitleText}>
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
    // marginLeft: 10,
    // marginRight: 10,
    alignSelf: "flex-start",
    width: width,
    // flexDirection: 'row-reverse',
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
