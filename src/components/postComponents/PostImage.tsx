import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import { Post } from "../../types";
import { averageRatio, hwrosh, width, wwrosw } from "../../constants/Layout";
import MyCustomSkeleton from "../MyCustomSkeleton";

type Props = { image: Post["image"] };

const PostImage = ({ image }: Props) => {
  const [postImageLoading, setPostImageLoading] = useState(true);
  return (
    <View style={[styles.container, { marginTop: hwrosh(5) }]}>
      {postImageLoading && (
        <View
          style={[
            {
              height: hwrosh(190),
              borderRadius: averageRatio(10),
              width: width - wwrosw(20),
              position: "absolute",
              zIndex: 1,
            },
          ]}
        >
          <MyCustomSkeleton
            style={{
              height: hwrosh(190),
              borderRadius: averageRatio(10),
              width: width - wwrosw(20),
            }}
          />
        </View>
      )}
      <Image
        onLoadStart={() => {
          setPostImageLoading(true);
        }}
        onLoad={() => {
          setPostImageLoading(false);
        }}
        onLoadEnd={() => {
          setPostImageLoading(false);
        }}
        source={{ uri: image }}
        style={{
          height: hwrosh(190),
          borderRadius: averageRatio(10),
          width: width - wwrosw(20),
        }}
      />
    </View>
  );
};

export { PostImage };

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
