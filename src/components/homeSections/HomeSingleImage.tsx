import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import { theme } from "../../constants/myColors";

type Props = { uri: string };

const HomeSingleImage = ({ uri }: Props) => {
  const imageWidth = width * 0.9;
  return (
    <View
      style={{
        marginTop: 5,
        marginLeft: 10,
        flexDirection: theme.localizationFlexDirection,
      }}
    >
      <Image
        source={{
          uri,
        }}
        style={{
          height: 200,
          width: imageWidth,
          borderRadius: theme.borderRadius,
        }}
      />
    </View>
  );
};

export default HomeSingleImage;

const styles = StyleSheet.create({});
