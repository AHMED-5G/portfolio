import { StyleSheet, View, FlatList, Text } from "react-native";
import React, { useEffect } from "react";
import { PostComment, User } from "../../types";
import { width } from "../../constants/Layout";
// import { myColors } from "../../constants/myColors";

import CommentComponent from "./CommentComponent";
import { myColors, theme } from "../../constants/myColors";

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
        initialNumToRender={3}
        style={{ flexGrow: 0, marginTop: 10 }}
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
    marginTop: 10,
    width: width - 20,
    alignContent: "flex-start",
  },
  commentTitleText: { fontSize: 18, color: myColors.black, fontWeight: "700" },
});
