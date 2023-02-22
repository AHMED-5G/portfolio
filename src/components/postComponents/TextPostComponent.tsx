import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Post } from "../../types";
import { PostAuthor } from "./PostAuthor";
import { PostText } from "./PostText";
import DuringSevenDaysAgo from "./DuringSevenDaysAgo";

type Props = { post: Post };

const TextPostComponent = ({ post }: Props) => {
  return (
    <View>
      {post.by && <PostAuthor user={post.by} />}

      <View style={{ marginTop: 20 }}>
        <PostText text={post.text} />
      </View>
    </View>
  );
};

export { TextPostComponent };

const styles = StyleSheet.create({});
