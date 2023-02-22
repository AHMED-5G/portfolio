import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Post } from "../../types";

type Props = { post: Post };

const VideoPostComponent = (props: Props) => {
  return (
    <View>
      <Text>VideoPostComponent</Text>
    </View>
  );
};

export { VideoPostComponent };

const styles = StyleSheet.create({});
