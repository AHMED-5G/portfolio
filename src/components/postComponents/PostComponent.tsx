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
type Props = { post: Post };

const PostComponent = ({ post }: Props) => {
  const [commentCounter, setCommentCounter] = useState(
    Math.floor(Math.random() * 30) + 1
  );
  const [favoriteCounter, setFavoriteCounter] = useState(
    Math.floor(Math.random() * 300) + 1
  );
  const [shareCounter, setShareCounter] = useState(
    Math.floor(Math.random() * 130) + 1
  );
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
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            margin: 5,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            height:48
          }}
        >
          <Ionicons name="share-social" size={28} color={myColors.black} />
          <Text>{shareCounter}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            margin: 5,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginRight: 10,
              justifyContent: "center",
              alignItems: "center",
              height:48
            }}
          >
            <MaterialIcons name="favorite-border" size={28} color="black" />
            <Text>{favoriteCounter} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginLeft: 5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              height:48
            }}
          >
            <MaterialCommunityIcons
              name="comment-outline"
              size={28}
              color="black"
            />
            <Text>{commentCounter} </Text>
          </TouchableOpacity>
        </View>
      </View>
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
