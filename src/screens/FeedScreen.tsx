import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../types";
import { mergePosts } from "../../dummy/dummy";
import { myColors } from "../constants/Colors";
import { PostComponent } from "../components/postComponents/PostComponent";
import { width } from "../constants/Layout";

function FeedScreen({ navigation }: RootTabScreenProps<"Feed">) {
  const posts = mergePosts;

  return (
    <View style={{ marginBottom: 120 }}>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 22,
            color: myColors.black,
            fontWeight: "800",
          }}
        >
          Time Line
        </Text>
        <View
          style={{
            marginTop: 20,
            width,
            height: 1,
            backgroundColor: myColors.black,
            opacity: 0.7,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 30,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          initialNumToRender={5}
          data={posts}
          renderItem={({ item }) => <PostComponent post={item} />}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
export { FeedScreen };

const styles = StyleSheet.create({});
