import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { yachtImages } from "../../../dummy/yachtDummy/images";
import { width } from "../../constants/Layout";
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { i18n } from "../../translation/i18n";
import { getRandomOneItemFromList } from "../../utils/helperFunctions";
import HomeSingleImage from "./HomeSingleImage";
import HomeSectionContainer from "./HomeSectionContainer";
import HomeSectionTitle from "./HomeSectionTitle";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home", undefined>;
};

const YachtSection = ({ navigation }: Props) => {
  function Content() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YachtStackNavigation");
        }}
        accessibilityHint={i18n.t("yachts") + "image"}
      >
        <HomeSingleImage uri={getRandomOneItemFromList(yachtImages)} />
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <HomeSectionTitle text={i18n.t("yachts")} />
      <HomeSectionContainer content={<Content />} />
    </View>
  );
};

export default YachtSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
