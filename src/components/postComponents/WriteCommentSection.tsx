import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { myColors } from "../../constants/Colors";
import { width } from "../../constants/Layout";
import FormTextInput from "../mini/FormTextInput";
import { Post } from "../../types";

type Props = {
  post: Post;
  commentText: string;
  setCommentText: React.Dispatch<React.SetStateAction<string>>;
  writeCommentState: boolean;
  setWriteCommentState: React.Dispatch<React.SetStateAction<boolean>>;
  showComments: boolean;
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
  sendComment: () => void;
};

const WriteCommentSection = ({
  post,
  commentText,
  setCommentText,
  writeCommentState,
  setWriteCommentState,
  showComments,
  setShowComments,
  sendComment,
}: Props) => {
  return (
    <View style={styles.commentContainer}>
      <FormTextInput
        placeholder="Write comment ..."
        value={commentText}
        setText={(text: string) => setCommentText(text)}
        onFocus={() => setWriteCommentState(true)}
        width={writeCommentState ? 0.67 * width : undefined}
        multiline
        mainContainerStyle={{
          borderWidth: 0.5,
          borderColor: "black",
          borderRadius: 10,
        }}
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
        <TouchableOpacity
          style={styles.sendIconContainer}
          onPress={() => {
            sendComment();
          }}
        >
          <FontAwesome name="send" size={24} color="black" />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.commentIconContainer}
        onPress={() => {
          if (!showComments) {
            setShowComments(true);
          } else {
            setShowComments(false);
          }
        }}
      >
        {!showComments ? (
          <MaterialCommunityIcons
          disabled
            name="comment-eye-outline"
            size={28}
            color="black"
            accessibilityHint={"show" + post.comments?.length + "comments"}
          />
        ) : (
          <MaterialCommunityIcons
          disabled
            name="comment-off-outline"
            size={28}
            accessibilityHint={"hide comments"}
          />
        )}
        <Text>{post.comments?.length}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WriteCommentSection;

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 48,
  },
  sendIconContainer: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3,
  },
  commentIconContainer: {
    flexDirection: "row",
    marginLeft: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 48,
    width: 48
  },
});
