import { Image, View } from "react-native";
import React from "react";
import { myGames } from "./data";
import SectionContainer from "./SectionContainer";
import { theme } from "../../../constants/theme";
import { averageRatio, hwrosh, width } from "../../../constants/Layout";
import { FlatListWithCircularIndicator } from "react-native-flatlist-withindicator";
import { i18n } from "../../../translation/i18n";

const MyGames = () => {
  const cardWidth = averageRatio(width * 0.5);
  const Content = () => {
    const marginValue = hwrosh(10);
    return (
      <FlatListWithCircularIndicator
        cardWidthPlusMarginValue={cardWidth + marginValue}
        data={myGames}
        renderItem={({ item }) => (
          <View
            style={{
              width: cardWidth,
              height: hwrosh(200),
              marginRight: marginValue,
              borderRadius: averageRatio(5),
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              overflow: "hidden",
              backgroundColor: theme.cardBackground(),
            }}
          >
            <Image
              resizeMode="center"
              source={{ uri: item.image }}
              style={{
                width: cardWidth,
                height: hwrosh(200),
                borderRadius: averageRatio(5),
              }}
            />
          </View>
        )}
      />
    );
  };
  return (
    <SectionContainer content={<Content />} title={i18n.t("mySimulators")} />
  );
};

export default MyGames;
