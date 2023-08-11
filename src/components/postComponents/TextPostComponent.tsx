import { View } from "react-native";
import React from "react";
import { Post } from "../../types";
import { PostAuthor } from "./PostAuthor";
import { PostText } from "./PostText";
import { hwrosh } from "../../constants/Layout";

type Props = { post: Post };

const TextPostComponent = ({ post }: Props) => {
  return (
    <View>
      {post.by && <PostAuthor user={post.by} />}
      <View style={{ marginTop: hwrosh(20) }}>
        <PostText text={post.text} />
      </View>
    </View>
  );
};

export { TextPostComponent };
