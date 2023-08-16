import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import {
  averageRatio,
  circularRatio,
  fontRatio,
  hwrosh,
  width,
  wwrosw,
} from "../../constants/Layout";
import { PostComment } from "../../types";
import LikeComponent from "./LikeComponent";
import { myColors, theme } from "../../constants/theme";

type Props = { comment: PostComment };

const authImageRadius = circularRatio(50);
const CommentComponent = ({ comment }: Props) => {
  const [readMore, setReadMore] = useState(false);
  const [lengthOfLiens, setLengthOfLiens] = useState(0);
  const NumberOfLiensToShow = 4;
  const [favoriteState, setFavoriteState] = useState<boolean>(!false);
  return (
    <View style={styles.commentContainer}>
      <View style={styles.commentAuthorContainer}>
        <Image source={{ uri: comment.by?.image }} style={styles.authorImage} />
        <Text style={[styles.authorNameText, { color: theme.baseTextColor() }]}>
          {comment.by?.name}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: wwrosw(5) }}>
          <Text
            onTextLayout={(event) => {
              setLengthOfLiens(event.nativeEvent.lines.length);
            }}
            numberOfLines={readMore ? undefined : NumberOfLiensToShow}
            style={{
              fontSize: fontRatio(18),
              fontWeight: "400",
              color: theme.baseTextColor(),
            }}
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
    width: width - wwrosw(40),
    borderWidth: 0.7,
    borderColor: myColors.black,
    marginLeft: wwrosw(3),
    borderRadius: averageRatio(5),
  },
  commentAuthorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  authorImage: {
    width: authImageRadius,
    height: authImageRadius,
    borderRadius: authImageRadius,
    margin: averageRatio(10),
  },
  authorNameText: { fontSize: fontRatio(22), fontWeight: "700" },
  readLessContainer: {
    alignItems: "flex-end",
    marginRight: wwrosw(25),
    marginTop: hwrosh(10),
    height: hwrosh(48),
  },
  readMoreContainer: {
    alignItems: "flex-end",
    marginRight: wwrosw(25),
    marginTop: hwrosh(10),
    width: "100%",
    height: hwrosh(48),
  },
  readMoreLessText: {
    fontSize: fontRatio(16),
    fontWeight: "800",
  },
  favoriteContainer: {
    flexDirection: "row",
    marginRight: wwrosw(10),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: hwrosh(48),
  },
});
