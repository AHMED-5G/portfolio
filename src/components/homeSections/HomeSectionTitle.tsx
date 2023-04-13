import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = { text: string };

const HomeSectionTitle = ({ text }: Props) => {
  return (
    <View style={styles.hotelsTextContainer}>
      <Text accessibilityRole="header" style={styles.sectionTitleText}>
        {text}
      </Text>
    </View>
  );
};

export default HomeSectionTitle;

const styles = StyleSheet.create({
  hotelsTextContainer: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    alignSelf: "flex-start",
  },
  sectionTitleText: {
    fontSize: 25,
    fontWeight: "700",
    alignSelf: "flex-start",
    marginTop: 10,
  },
});
