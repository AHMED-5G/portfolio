import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import HomeSectionTitle from "./HomeSectionTitle";
import { i18n } from "../../translation/i18n";
import HomeSingleImage from "./HomeSingleImage";
import HomeSectionContainer from "./HomeSectionContainer";
import { hwrosh } from "../../constants/Layout";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home", undefined>;
};

const MarketSection = ({ navigation }: Props) => {
  function Content() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MarketStackNavigator");
        }}
        accessibilityHint={i18n.t("market")}
      >
        <HomeSingleImage uri="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <HomeSectionTitle text={i18n.t("market")} />
      <HomeSectionContainer content={<Content />} />
    </View>
  );
};

export default MarketSection;

const styles = StyleSheet.create({
  container: {
    marginTop: hwrosh(5),
  },
});
