import { StyleSheet, View, FlatList, Text } from "react-native";
import React from "react";
import { PostComment } from "../../types";
import { fontRatio, hwrosh, width, wwrosw } from "../../constants/Layout";
import CommentComponent from "./CommentComponent";
import { myColors, theme } from "../../constants/theme";

type Props = { comments: PostComment[] };

const Comments = ({ comments }: Props) => {
  return (
    <View style={styles.commentsContainer}>
      <View style={styles.commentTitleContainer}>
        <Text
          style={[styles.commentTitleText, { color: theme.baseTextColor() }]}
        >
          Comments
        </Text>
      </View>
      <FlatList
        initialNumToRender={2}
        style={{ flexGrow: 0, marginTop: hwrosh(10) }}
        horizontal={true}
        data={comments}
        renderItem={({ item }) => <CommentComponent comment={item} />}
        keyExtractor={(item) => item.timeStamp}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Comments;
const styles = StyleSheet.create({
  commentsContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  commentTitleContainer: {
    marginTop: hwrosh(10),
    width: width - wwrosw(20),
    alignContent: "flex-start",
  },
  commentTitleText: {
    fontSize: fontRatio(18),
    color: myColors.black,
    fontWeight: "700",
  },
});
