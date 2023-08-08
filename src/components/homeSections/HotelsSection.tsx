import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { Hotel, RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { hotels } from "../../../dummy/hotels";
import { i18n } from "../../translation/i18n";
import HotelCard from "../HotelCard";
import HomeSectionTitle from "./HomeSectionTitle";
import HomeSectionContainer from "./HomeSectionContainer";
import { hwrosh, wwrosw } from "../../constants/Layout";
import { FlatListWithRectangleIndicator } from "react-native-flatlist-withindicator";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home", undefined>;
};

const HotelsSection = ({ navigation }: Props) => {
  const Content = () => {
    return (
      <FlatListWithRectangleIndicator
        cardWidthPlusMarginValue={wwrosw(200) + wwrosw(20)}
        data={hotels}
        renderItem={({ item }) => (
          <View style={{ paddingTop: hwrosh(10), paddingBottom: hwrosh(10) }}>
            <HotelCard hotel={item} />
          </View>
        )}
        keyExtractor={(item: Hotel) => item.id.toString()}
        animationScaleFactor={0.5}
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
    marginTop: hwrosh(10),
  },
});
