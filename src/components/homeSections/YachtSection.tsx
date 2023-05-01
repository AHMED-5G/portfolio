import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { yachtImages } from "../../../dummy/yachtDummy/images";
import { width } from "../../constants/Layout";
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import HomeSectionTitle from "./HomeSectionTitle";
import { i18n } from "../../translation/i18n";
import { getRandomOneItemFromList } from "../../utils/helperFunctions";
import HomeSingleImage from "./HomeSingleImage";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home", undefined>;
};

const YachtSection = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <HomeSectionTitle text={i18n.t("yachts")} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YachtStackNavigation");
        }}
      >
        <HomeSingleImage uri={getRandomOneItemFromList(yachtImages)} />
      </TouchableOpacity>
    </View>
  );
};

export default YachtSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
