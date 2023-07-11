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
import { myColors, theme } from "../../constants/myColors";
import {
  averageRatio,
  circularRatio,
  hwrosh,
  width,
  wwrosw,
} from "../../constants/Layout";
import FormTextInput from "../mini/FormTextInput";
import { Post, PostComment } from "../../types";
import { removeWhiteSpaceAtStart } from "../../utils/helperFunctions";

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
        placeholderTextColor={theme.baseTextColor()}
        value={commentText}
        setText={(text: string) => {
          setCommentText(removeWhiteSpaceAtStart(text));
        }}
        containerStyle={{ backgroundColor: theme.cardBackground() }}
        onFocus={() => setWriteCommentState(true)}
        width={writeCommentState ? 0.67 * width : undefined}
        multiline
        mainContainerStyle={{
          borderWidth: 0.5,
          borderColor: theme.borderColor,
          borderRadius: averageRatio(10),
          height: hwrosh(48),
        }}
        style={{
          height: hwrosh(48),
        }}
        height={hwrosh(48)}
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
              size={circularRatio(34)}
              color={theme.iconColor()}
            />
          ) : null
        }
        onBlur={() => setWriteCommentState(false)}
      />
      {commentText && (
        <TouchableOpacity
          accessibilityHint="send comment"
          style={styles.sendIconContainer}
          onPress={() => {
            sendComment();
          }}
        >
          <FontAwesome
            name="send"
            size={circularRatio(24)}
            color={theme.iconColor()}
          />
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
            size={circularRatio(30)}
            color={theme.iconColor()}
            accessibilityHint={"show" + post.comments?.length + "comments"}
          />
        ) : (
          <MaterialCommunityIcons
            disabled
            name="comment-off-outline"
            size={circularRatio(28)}
            color={theme.iconColor()}
            accessibilityHint={"hide comments"}
          />
        )}
        <Text
          accessibilityElementsHidden={true}
          importantForAccessibility="no-hide-descendants"
          style={{ color: theme.baseTextColor() }}
        >
          {post.comments?.length}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WriteCommentSection;

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    margin: averageRatio(5),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: hwrosh(48),
  },
  sendIconContainer: {
    height: hwrosh(48),
    width: wwrosw(48),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wwrosw(3),
  },
  commentIconContainer: {
    flexDirection: "row",
    marginLeft: wwrosw(5),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: hwrosh(48),
    width: wwrosw(48),
  },
});
