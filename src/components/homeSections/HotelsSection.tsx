import { View } from "react-native";
import React from "react";
import { Hotel } from "../../types";
import { hotels } from "../../../dummy/hotels";
import { i18n } from "../../translation/i18n";
import HotelCard from "../HotelCard";
import HomeSectionTitle from "./HomeSectionTitle";
import HomeSectionContainer from "./HomeSectionContainer";
import { hwrosh, wwrosw } from "../../constants/Layout";
import { FlatListWithRectangleIndicator } from "react-native-flatlist-withindicator";

// type Props = {
//   navigation: StackNavigationProp<RootStackParamList, "Home", undefined>;
// };

const HotelsSection = () => {
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
    <View style={{ marginTop: hwrosh(10) }}>
      <HomeSectionTitle text={i18n.t("hotels")} />
      <HomeSectionContainer content={<Content />} />
    </View>
  );
};

export default HotelsSection;
