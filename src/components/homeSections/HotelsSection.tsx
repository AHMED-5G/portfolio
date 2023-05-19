import { StyleSheet, View, FlatList } from "react-native";
import React from "react";

import { Hotel, RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { hotels } from "../../../dummy/hotels";
import { i18n } from "../../translation/i18n";
import { shuffleArray } from "../../utils/helperFunctions";
import HotelCard from "../HotelCard";
import HomeSectionTitle from "./HomeSectionTitle";
import { theme } from "../../constants/myColors";
import HomeSectionContainer from "./HomeSectionContainer";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home", undefined>;
};

const HotelsSection = ({ navigation }: Props) => {
  const Content = () => {
    return (
      <FlatList
        data={hotels}
        horizontal
        renderItem={({ item }) => (
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <HotelCard hotel={item} />
          </View>
        )}
        keyExtractor={(item: Hotel) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    );
  };
  return (
    <View style={styles.container}>
      <HomeSectionTitle text={i18n.t("hotels")} />
      <HomeSectionContainer content={<Content />} />
    </View>
  );
};

export default HotelsSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
