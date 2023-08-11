import { View } from "react-native";
import React from "react";
import OpenSourceLib from "./OpenSourceLib";
import Technologies from "./Technologies";
import MyGames from "./MyGames";
import Reviews from "./Reviews";
import { hwrosh } from "../../../constants/Layout";

const AAContent = () => {
  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: hwrosh(10),
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
