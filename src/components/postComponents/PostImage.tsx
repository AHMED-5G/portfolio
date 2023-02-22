import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Post } from "../../types";
import { width } from "../../constants/Layout";

type Props = { image: Post["image"] };

const PostImage = ({ image }: Props) => {
  return (
    <View
      style={{
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: image }}
        style={{ height: 190, borderRadius: 10, width: width - 30 }}
      />
    </View>
  );
};

export { PostImage };

const styles = StyleSheet.create({});
