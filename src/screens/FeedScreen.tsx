import { FlatList, StyleSheet, View, Text, RefreshControl } from "react-native";
import React, { useRef, useState } from "react";
import { Post, RootTabScreenProps } from "../types";
import { mergePosts } from "../../dummy/dummy";
import { myColors } from "../constants/myColors";
import { PostComponent } from "../components/postComponents/PostComponent";
import { width } from "../constants/Layout";
import { shuffleArray } from "../utils/helperFunctions";
import { Audio } from "expo-av";

function FeedScreen({ navigation }: RootTabScreenProps<"Feed">) {
  const posts = mergePosts;
  const [refreshState, setRefreshState] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/refresh.wav")
    );
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  const refreshRoutine = async () => {
    await playSound();
    setRefreshState(true);
    setTimeout(() => {
      shuffleArray(posts);
      setRefreshState(false);
    }, 2000);
  };
  const onViewableItemsChanged = ({ viewableItems }) => {
    // viewableItems.map((post) => post.index);
    console.log(viewableItems)
  };
  const viewabilityConfig = { itemVisiblePercentThreshold: 100 };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);
  return (
    <View style={{ marginBottom: 120 }}>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            marginLeft: 15,
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
      <View style={styles.postsContainer}>
        <FlatList
          refreshControl={
            <RefreshControl
              colors={["#9Bd35A", "#689F38"]}
              refreshing={refreshState}
              onRefresh={() => refreshRoutine()}
            />
          }
          keyboardShouldPersistTaps="handled"
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          // onViewableItemsChanged={viewabilityConfigCallbackPairs.current}
          // viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
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

const styles = StyleSheet.create({
  postsContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
