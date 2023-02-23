import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { Post } from "../../types";
import { width } from "../../constants/Layout";

type Props = { image: Post["image"] };

const PostImage = ({ image }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
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
