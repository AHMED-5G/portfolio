import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Post } from "../../types";
import { theme } from "../../constants/myColors";

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
      <View style={{ marginLeft: 5 }}>
        <Text
          onTextLayout={(event) => {
            setLengthOfLiens(event.nativeEvent.lines.length);
          }}
          numberOfLines={readMore ? undefined : NumberOfLiensToShow}
          style={{ fontSize: 18, fontWeight: "400" }}
        >
          {text}
        </Text>

        {readMore && (
          <TouchableOpacity
            onPress={() => setReadMore(false)}
            style={{
              alignItems: "flex-end",
              marginRight: 25,
              marginTop: 10,
              height: 48,
            }}
          >
            <Text style={styles.readMoreLessText}>Less</Text>
          </TouchableOpacity>
        )}
      </View>
      {lengthOfLiens > NumberOfLiensToShow && !readMore && (
        <TouchableOpacity
          onPress={() => setReadMore(true)}
          style={{
            alignItems: "flex-end",
            marginRight: 25,
            marginTop: 10,
            width: "100%",
            height: 48,
          }}
        >
          <Text style={styles.readMoreLessText}>Read More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export { PostText };

const styles = StyleSheet.create({
  readMoreLessText: {
    fontSize: 16,
    fontWeight: "800",
    color: theme.actionColor,
  },
});
