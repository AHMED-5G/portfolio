import { View } from "react-native";
import React from "react";
import OpenSourceLib from "./OpenSourceLib";
import Technologies from "./Technologies";
import MyGames from "./MyGames";

const AAContent = () => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Technologies />
      <MyGames />
      <OpenSourceLib />

    </View>
  );
};

export default AAContent;
