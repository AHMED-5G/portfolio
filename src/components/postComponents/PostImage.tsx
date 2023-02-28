import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import { Post } from "../../types";
import { width } from "../../constants/Layout";
import SkeletonLoader from "expo-skeleton-loader";

type Props = { image: Post["image"] };

const PostImage = ({ image }: Props) => {
  const [postImageLoading, setPostImageLoading] = useState(true);
  function SkeltonItem() {
    return (
      <SkeletonLoader boneColor="#EEE" highlightColor="#20b2aa" duration={1000}>
        <SkeletonLoader.Item style={styles.image} />
      </SkeletonLoader>
    );
  }
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
          <SkeltonItem />
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
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  image: { height: 190, borderRadius: 10, width: width - 20 },
});
