import { View } from "react-native";
import React from "react";
import OpenSourceLib from "./OpenSourceLib";
import Technologies from "./Technologies";
import MyGames from "./MyGames";
import Reviews from "./Reviews";
import { hwrosh, width, wwrosw } from "../../../constants/Layout";

const AAContent = () => {
  return (
    <View
      style={{
        marginBottom: hwrosh(10),
        marginLeft: wwrosw(10),
        width: width,
      }}
    >
      <Technologies />
      <MyGames />
      <OpenSourceLib />
      <Reviews />
    </View>
  );
};

export default AAContent;
