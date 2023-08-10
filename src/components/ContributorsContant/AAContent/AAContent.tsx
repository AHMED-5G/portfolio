import { View } from "react-native";
import React from "react";
import OpenSourceLib from "./OpenSourceLib";
import Technologies from "./Technologies";

const AAContent = () => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Technologies />
      <OpenSourceLib />
    </View>
  );
};

export default AAContent;
