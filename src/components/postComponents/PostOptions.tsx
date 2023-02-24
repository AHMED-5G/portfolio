import { StyleSheet, View } from "react-native";
import React, { useMemo, useState } from "react";
import Comments from "./Comments";
import { Post, PostComment } from "../../types";
import {
  generateRandomBoolean,
  getRandomOneItemFromList,
  randomIntNumber,
} from "../../utils/helperFunctions";
import LikeComponent from "./LikeComponent";
import ShareComponent from "./ShareComponent";
import WriteCommentSection from "./WriteCommentSection";
import { users } from "../../../dummy/Users";

type Props = {
  post: Post;
};

const PostOptions = ({ post }: Props) => {
  const [commentText, setCommentText] = useState("");
  const [writeCommentState, setWriteCommentState] = useState(false);
  const shareCounter = useMemo(() => randomIntNumber(200), []);
  const favoriteCounter = useMemo(() => randomIntNumber(300), []);
  const [favoriteState, setFavoriteState] = useState<boolean>(
    generateRandomBoolean()
  );
  const [showComments, setShowComments] = useState(false);

  const sendComment = () => {
    post.comments?.unshift({
      body: commentText,
      timeStamp: Date.now().toString(),
      by: { ...getRandomOneItemFromList(users), name: "You" },
      favoriteCounter: 0,
    });
    setCommentText("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        {!writeCommentState && (
          <LikeComponent
            {...{
              favoriteCounter,
              favoriteState,
              setFavoriteState,
            }}
          />
        )}
        <WriteCommentSection
          {...{
            post,
            commentText,
            setCommentText,
            showComments,
            setShowComments,
            writeCommentState,
            setWriteCommentState,
            sendComment,
          }}
        />
        {!writeCommentState && <ShareComponent {...{ shareCounter }} />}
      </View>
      <View>
        {showComments && post.comments && <Comments comments={post.comments} />}
      </View>
    </View>
  );
};

export default PostOptions;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    alignItems: "center",
  },
});
