import { StyleSheet,  View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { yachtImages } from "../../../dummy/yachtDummy/images";
import { width } from "../../constants/Layout";
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import HomeSectionTitle from "./HomeSectionTitle";
import { i18n } from "../../translation/i18n";
import { getRandomOneItemFromList } from "../../utils/helperFunctions";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home", undefined>;
};

const YachtSection = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <HomeSectionTitle text={i18n.t("yacht")} />
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => {
          navigation.navigate("YachtStackNavigation");
        }}
      >
        <Image
          source={{ uri: getRandomOneItemFromList(yachtImages) }}
          style={{ height: 200, width: width * 0.8, borderRadius: 10 }}
        />
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
