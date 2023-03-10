import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import { Post, PostTypes } from "../../types";
import { TextPostComponent } from "./TextPostComponent";
import { ImagePostComponent } from "./ImagePostComponent";
import { VideoPostComponent } from "./VideoPostComponent";
import { width } from "../../constants/Layout";

import PostOptions from "./PostOptions";
import { Video } from "expo-av";
type Props = {
  post: Post;
  isViewable: boolean;
  index: number;

};

const PostComponent = ({ post, isViewable, index }: Props) => {
  const [whoIsRunningIam, setWhoIsRunningIam] = useState<string | null>(null);
  return (
    <View style={styles.postContainer}>
      {post.type == PostTypes.Text ? (
        <TextPostComponent post={post} />
      ) : post.type == PostTypes.Image ? (
        <ImagePostComponent post={post} />
      ) : post.type == PostTypes.Video ? (
        <VideoPostComponent post={post} {...{ isViewable, index }} />
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
    // flex: 1,
    // backgroundColor: "#fffafa",
    backgroundColor: "#fff",
    width: width - 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
});
