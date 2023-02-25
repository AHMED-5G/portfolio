import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
;
import { width } from "../../constants/Layout";
import { PostComment } from "../../types";
import LikeComponent from "./LikeComponent";
import { generateRandomBoolean } from "../../utils/helperFunctions";
import { myColors } from "../../constants/myColors";

type Props = { comment: PostComment };

const CommentComponent = ({ comment }: Props) => {
  const [readMore, setReadMore] = useState(false);
  const [lengthOfLiens, setLengthOfLiens] = useState(0);
  const NumberOfLiensToShow = 4;
  const [favoriteState, setFavoriteState] = useState<boolean>(!false);
  return (
    <View style={styles.commentContainer}>
      <View style={styles.commentAuthorContainer}>
        <Image source={{ uri: comment.by?.image }} style={styles.authorImage} />
        <Text style={styles.authorNameText}>{comment.by?.name}</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 5 }}>
          <Text
            onTextLayout={(event) => {
              setLengthOfLiens(event.nativeEvent.lines.length);
            }}
            numberOfLines={readMore ? undefined : NumberOfLiensToShow}
            style={{ fontSize: 18, fontWeight: "400" }}
          >
            {comment.body}
          </Text>
          {readMore && (
            <TouchableOpacity
              onPress={() => setReadMore(false)}
              style={styles.readLessContainer}
            >
              <Text style={styles.readMoreLessText}>Less</Text>
            </TouchableOpacity>
          )}
        </View>
        {lengthOfLiens > NumberOfLiensToShow && !readMore && (
          <TouchableOpacity
            onPress={() => setReadMore(true)}
            style={styles.readMoreContainer}
          >
            <Text style={styles.readMoreLessText}>Read More</Text>
          </TouchableOpacity>
        )}
      </View>
      <LikeComponent
        favoriteCounter={comment.favoriteCounter ?? 0}
        favoriteState={favoriteState}
        setFavoriteState={setFavoriteState}
      />
    </View>
  );
};

export default CommentComponent;

const styles = StyleSheet.create({
  commentContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: width - 40,
    borderWidth: 0.7,
    borderColor: myColors.black,
    marginLeft: 3,
    borderRadius: 5,
  },
  commentAuthorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  authorImage: { width: 50, height: 50, borderRadius: 50, margin: 10 },
  authorNameText: { fontSize: 22, fontWeight: "700" },
  readLessContainer: {
    alignItems: "flex-end",
    marginRight: 25,
    marginTop: 10,
    height: 48,
  },
  readMoreContainer: {
    alignItems: "flex-end",
    marginRight: 25,
    marginTop: 10,
    width: "100%",
    height: 48,
  },
  readMoreLessText: {
    fontSize: 16,
    fontWeight: "800",
  },
  favoriteContainer: {
    flexDirection: "row",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 48,
  },
});
