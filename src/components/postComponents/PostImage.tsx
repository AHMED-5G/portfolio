import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import { Post } from "../../types";
import { averageRatio, hwrosh, width, wwrosw } from "../../constants/Layout";
import MyCustomSkeleton from "../MyCustomSkeleton";

type Props = { image: Post["image"] };

const PostImage = ({ image }: Props) => {
  const [postImageLoading, setPostImageLoading] = useState(true);
  return (
    <View style={styles.container}>
      {postImageLoading && (
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
          setPostImageLoading(true);
        }}
        onLoad={() => {
          setPostImageLoading(false);
        }}
        onLoadEnd={() => {
          setPostImageLoading(false);
        }}
        source={{ uri: image }}
        style={styles.image}
      />
    </View>
  );
};

export { PostImage };

const styles = StyleSheet.create({
  container: {
    marginTop: hwrosh(5),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  image: {
    height: hwrosh(190),
    borderRadius: averageRatio(10),
    width: width - wwrosw(20),
  },
});
