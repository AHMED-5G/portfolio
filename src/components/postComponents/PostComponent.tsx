import { StyleSheet, View } from "react-native";
import { Post, PostTypes } from "../../types";
import { TextPostComponent } from "./TextPostComponent";
import { ImagePostComponent } from "./ImagePostComponent";
import { VideoPostComponent } from "./VideoPostComponent";
import { hwrosh, width, wwrosw } from "../../constants/Layout";

import PostOptions from "./PostOptions";
import { theme } from "../../constants/theme";
import React from "react";
type Props = {
  post: Post;
  isViewable: boolean;
  index: number;
};

const PostComponent = ({ post, isViewable, index }: Props) => {
  return (
    <View
      style={[
        styles.postContainer,
        {
          width: width - wwrosw(10),
          marginTop: hwrosh(20),
          backgroundColor: theme.cardBackground(),
        },
      ]}
    >
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
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: theme.borderRadius,
  },
});
