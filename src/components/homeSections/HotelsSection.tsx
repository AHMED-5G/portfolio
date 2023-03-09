import {
  StyleSheet,
  View,

  FlatList,
} from "react-native";
import React from "react";

import { Hotel, RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { hotels } from "../../../dummy/hotels";
import { i18n } from "../../translation/i18n";
import { shuffleArray } from "../../utils/helperFunctions";
import HotelCard from "../HotelCard";
import HomeSectionTitle from "./HomeSectionTitle";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home", undefined>;
};

const HotelsSection = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <HomeSectionTitle text={i18n.t("hotels")} />
      <View style={{ marginLeft: 10 }}>
        <FlatList
          data={shuffleArray(hotels)}
          horizontal
          renderItem={({ item }) => <HotelCard hotel={item} />}
          keyExtractor={(item: Hotel) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HotelsSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
