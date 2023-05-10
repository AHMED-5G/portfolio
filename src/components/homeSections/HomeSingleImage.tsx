import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import { width } from "../../constants/Layout";
import { theme } from "../../constants/myColors";
import MyCustomSkeleton from "../MyCustomSkeleton";

type Props = { uri: string };

const imageWidth = width * 0.9;
const HomeSingleImage = ({ uri }: Props) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <View
      style={{
        marginTop: 5,
        flexDirection: theme.localizationFlexDirection,
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
          <MyCustomSkeleton style={styles.image} />
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
        style={styles.image}
      />
    </View>
  );
};

export default HomeSingleImage;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: imageWidth,
    borderRadius: theme.borderRadius,
  },
});
