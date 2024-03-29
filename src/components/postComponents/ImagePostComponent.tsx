import { View } from "react-native";
import React from "react";
import { Post } from "../../types";
import { PostAuthor } from "./PostAuthor";
import { PostText } from "./PostText";
import { PostImage } from "./PostImage";
import { hwrosh } from "../../constants/Layout";

type Props = { post: Post };

const ImagePostComponent = ({ post }: Props) => {
  return (
    <View>
      {post.by && <PostAuthor user={post.by} />}
      <View style={{ marginTop: hwrosh(10) }}>
        <PostText text={post.text} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <PostImage image={post.image} />
      </View>
    </View>
  );
};

export { ImagePostComponent };
