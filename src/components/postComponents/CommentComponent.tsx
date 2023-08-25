import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import {
  averageRatio,
  circularRatio,
  hwrosh,
  width,
  wwrosw,
} from "../../constants/Layout";
import { PostComment } from "../../types";
import LikeComponent from "./LikeComponent";
import { myColors, theme } from "../../constants";

type Props = { comment: PostComment };

const authImageRadius = circularRatio(50);
const CommentComponent = ({ comment }: Props) => {
  const [readMore, setReadMore] = useState(false);
  const [lengthOfLiens, setLengthOfLiens] = useState(0);
  const NumberOfLiensToShow = 4;
  const [favoriteState, setFavoriteState] = useState<boolean>(!false);
  return (
    <View
      style={[
        styles.commentContainer,
        {
          width: width - wwrosw(40),
          borderRadius: averageRatio(5),
          marginLeft: wwrosw(3),
        },
      ]}
    >
      <View style={styles.commentAuthorContainer}>
        <Image
          source={{ uri: comment.by?.image }}
          style={[styles.authorImage, { margin: averageRatio(10) }]}
        />
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
              fontSize: theme.fontSize.s18,
              fontWeight: "400",
              color: theme.baseTextColor(),
            }}
          >
            {comment.body}
          </Text>
          {readMore && (
            <TouchableOpacity
              onPress={() => setReadMore(false)}
              style={[
                styles.readLessContainer,
                {
                  marginRight: wwrosw(25),
                  marginTop: hwrosh(10),
                  height: hwrosh(48),
                },
              ]}
            >
              <Text style={styles.readMoreLessText}>Less</Text>
            </TouchableOpacity>
          )}
        </View>
        {lengthOfLiens > NumberOfLiensToShow && !readMore && (
          <TouchableOpacity
            onPress={() => setReadMore(true)}
            style={[
              styles.readMoreContainer,
              {
                marginRight: wwrosw(25),
                marginTop: hwrosh(10),
                height: hwrosh(48),
              },
            ]}
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

    borderWidth: 0.7,
    borderColor: myColors.black,
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
  },
  authorNameText: { fontSize: theme.fontSize.s22, fontWeight: "700" },
  readLessContainer: {
    alignItems: "flex-end",
  },
  readMoreContainer: {
    alignItems: "flex-end",
    width: "100%",
  },
  readMoreLessText: {
    fontSize: theme.fontSize.medium,
    fontWeight: "800",
  },
});
