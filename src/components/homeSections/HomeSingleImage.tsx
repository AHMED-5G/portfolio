import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import { hwrosh, width } from "../../constants/Layout";
import { theme } from "../../constants/theme";
import MyCustomSkeleton from "../MyCustomSkeleton";

type Props = { uri: string };

const imageWidth = width * 0.9;
const HomeSingleImage = ({ uri }: Props) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <View
      style={{
        marginTop: hwrosh(5),
        flexDirection: "row",
      }}
    >
      {imageLoading && (
        <View
          style={[
            styles.image,
            {
              position: "absolute",
              zIndex: 1,
            },
          ]}
        >
          <MyCustomSkeleton
            style={{ width: imageWidth, height: hwrosh(200) }}
          />
        </View>
      )}
      <Image
        onLoadStart={() => {
          setImageLoading(true);
        }}
        onLoad={() => {
          setImageLoading(false);
        }}
        onLoadEnd={() => {
          setImageLoading(false);
        }}
        source={{ uri: uri }}
        style={[styles.image, { height: hwrosh(200) }]}
      />
    </View>
  );
};

export default HomeSingleImage;

const styles = StyleSheet.create({
  image: {
    width: imageWidth,
    borderRadius: theme.borderRadius,
  },
});
