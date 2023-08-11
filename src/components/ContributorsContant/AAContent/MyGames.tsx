import { Image, View } from "react-native";
import React from "react";
import { myGames } from "./data";
import SectionContainer from "./SectionContainer";
import { theme } from "../../../constants/myColors";
import { averageRatio, hwrosh, width } from "../../../constants/Layout";
import { FlatListWithCircularIndicator } from "react-native-flatlist-withindicator";

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
              borderRadius: 5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderWidth: 0.5,
              borderColor: theme.primary(),
            }}
          >
            <Image
              resizeMode="center"
              source={{ uri: item.image }}
              style={{
                width: cardWidth,
                height: "100%",
                borderRadius: 10,
                aspectRatio: 1,
                borderWidth: 0.5,
                borderColor: theme.primary(),
              }}
            />
          </View>
        )}
      />
    );
  };
  return <SectionContainer content={<Content />} title="My Simulators" />;
};

export default MyGames;
