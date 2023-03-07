import {  StyleSheet, View, Image } from "react-native";
import React from "react";
import { yachtImages } from "../../../dummy/yachtDummy/images";
import { width } from "../../constants/Layout";

type Props = {};

const RightSide = (props: Props) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
      }}
    >
      {yachtImages.slice(1, 4).map((image, index) => (
        <View key={index} style={{ marginBottom: 15 }}>
          <Image
            resizeMode="cover"
            key={index}
            source={{ uri: image }}
            style={{ width: width / 2 - 10, height: 200, borderRadius: 15 }}
          />
        </View>
      ))}
    </View>
  );
};

export default RightSide;

const styles = StyleSheet.create({});
