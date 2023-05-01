import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import HomeSectionTitle from "./HomeSectionTitle";
import { i18n } from "../../translation/i18n";
import HomeSingleImage from "./HomeSingleImage";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home", undefined>;
};

const MarketSection = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <HomeSectionTitle text={i18n.t("market")} />
      <TouchableOpacity
  
        onPress={() => {
          navigation.navigate("MarketStackNavigator");
        }}
      >
        <HomeSingleImage uri="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      </TouchableOpacity>
    </View>
  );
};

export default MarketSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
