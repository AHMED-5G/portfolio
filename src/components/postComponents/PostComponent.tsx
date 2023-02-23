import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { Post, PostTypes } from "../../types";
import { TextPostComponent } from "./TextPostComponent";
import { ImagePostComponent } from "./ImagePostComponent";
import { VideoPostComponent } from "./VideoPostComponent";
import { width } from "../../constants/Layout";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { myColors } from "../../constants/Colors";
import PostOptions from "./PostOptions";
type Props = { post: Post };

const PostComponent = ({ post }: Props) => {
  return (
    <View style={styles.postContainer}>
      {post.type == PostTypes.Text ? (
        <TextPostComponent post={post} />
      ) : post.type == PostTypes.Image ? (
        <ImagePostComponent post={post} />
      ) : post.type == PostTypes.Video ? (
        <VideoPostComponent post={post} />
      ) : (
        <View></View>
      )}
      <PostOptions post={post} />
    </View>
  );
};

export { PostComponent };

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#fffafa",
    width: width - 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
});
