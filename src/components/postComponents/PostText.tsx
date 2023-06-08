import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Post } from "../../types";
import { theme } from "../../constants/myColors";
import { i18n } from "../../translation/i18n";

type Props = { text: Post["text"] };

const PostText = ({ text }: Props) => {
  const [readMore, setReadMore] = useState(false);
  const [lengthOfLiens, setLengthOfLiens] = useState(0);
  const NumberOfLiensToShow = 4;

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginLeft: 5,
          backgroundColor: theme.readingTheme.backGroundColor,
          borderRadius: theme.borderRadius,
          padding: 5,
        }}
      >
        <Text
          onTextLayout={(event) => {
            setLengthOfLiens(event.nativeEvent.lines.length);
          }}
          numberOfLines={readMore ? undefined : NumberOfLiensToShow}
          style={{
            fontSize: theme.readingTheme.fontSize,
            fontWeight: "400",
            color: theme.readingTheme.fontColor,
          }}
        >
          {text}
        </Text>
      </View>
      {readMore && (
        <TouchableOpacity
          onPress={() => setReadMore(false)}
          style={{
            marginLeft: 10,
            marginTop: 10,
            width: "100%",
            height: 48,
            justifyContent: "center",
          }}
        >
          <Text
            style={[styles.readMoreLessText, { color: theme.baseTextColor() }]}
          >
            {i18n.t("readLess")}
          </Text>
        </TouchableOpacity>
      )}
      {lengthOfLiens > NumberOfLiensToShow && !readMore && (
        <TouchableOpacity
          onPress={() => setReadMore(true)}
          style={styles.readMoreLessContainer}
        >
          <Text
            style={[styles.readMoreLessText, { color: theme.baseTextColor() }]}
          >
            {i18n.t("readMore")}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export { PostText };

const styles = StyleSheet.create({
  readMoreLessText: {
    fontSize: 15,
    fontWeight: "800",
  },
  readMoreLessContainer: {
    marginLeft: 10,
    marginTop: 10,
    width: "100%",
    height: 48,
    justifyContent: "center",
  },
});
