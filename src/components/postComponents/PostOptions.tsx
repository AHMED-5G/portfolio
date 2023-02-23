import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { myColors } from "../../constants/Colors";
import FormTextInput from "../mini/FormTextInput";
import { width } from "../../constants/Layout";
import Comments from "./Comments";
import { Post } from "../../types";

type Props = {
  post: Post;
};

const PostOptions = ({ post }: Props) => {
  const [commentText, setCommentText] = useState("");

  const [writeCommentState, setWriteCommentState] = useState(false);
  const shareCounter = useMemo(() => Math.floor(Math.random() * 130) + 1, []);
  const favoriteCounter = useMemo(
    () => Math.floor(Math.random() * 300) + 1,
    []
  );

  const [showComments, setShowComments] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        {!writeCommentState && (
          <TouchableOpacity
            style={styles.favoriteContainer}
            accessibilityRole="button"
            accessibilityHint={favoriteCounter + "like"}
          >
            <MaterialIcons name="favorite-border" size={28} color="black" />
            <Text>{favoriteCounter}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.commentContainer}>
          <FormTextInput
            placeholder="Write comment ..."
            value={commentText}
            setText={(text: string) => setCommentText(text)}
            onFocus={() => setWriteCommentState(true)}
            width={writeCommentState ? 0.67 * width : undefined}
            multiline
            icon={
              writeCommentState ? (
                <MaterialIcons
                  onPress={() => {
                    setCommentText("");
                    setWriteCommentState(false);
                    Keyboard.dismiss();
                  }}
                  accessibilityRole="button"
                  name="cancel"
                  accessibilityHint="cancel add comment"
                  size={34}
                  color={myColors.grey1}
                />
              ) : null
            }
            onBlur={() => setWriteCommentState(false)}
            placeholderTextColor={myColors.black}
          />
          {commentText && (
            <TouchableOpacity style={styles.sendIconContainer}>
              <FontAwesome name="send" size={24} color="black" />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.commentIconContainer}>
            {!showComments ? (
              <MaterialCommunityIcons
                name="comment-eye-outline"
                size={28}
                color="black"
                onPress={() => {
                  setShowComments(true);
                }}
                accessibilityHint={"show" + post.comments?.length + "comments"}
              />
            ) : (
              <MaterialCommunityIcons
                name="comment-off"
                size={24}
                color="black"
                onPress={() => {
                  setShowComments(false);
                }}
                accessibilityHint={"hide comments"}
              />
            )}
            <Text>{post.comments?.length}</Text>
          </TouchableOpacity>
        </View>
        {!writeCommentState && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.shareContainer}
              accessibilityRole="button"
              accessibilityHint="Share"
            >
              <Ionicons name="share-social" size={28} color={myColors.black} />
            </TouchableOpacity>
            <Text
              accessibilityRole="text"
              accessibilityHint={shareCounter + "user shared this post"}
            >
              {shareCounter}
            </Text>
          </View>
        )}
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
  shareContainer: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 48,
  },
  commentIconContainer: {
    flexDirection: "row",
    marginLeft: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 48,
  },
  commentContainer: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  favoriteContainer: {
    flexDirection: "row",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 48,
  },
  sendIconContainer: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3,
  },
});
