import {
  FlatList,
  StyleSheet,
  View,
  Text,
  RefreshControl,
  ViewToken,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Post, RootTabScreenProps } from "../types";
import { mergePosts } from "../../dummy/postsDummy/postsDummy";
import { myColors } from "../constants/myColors";
import { PostComponent } from "../components/postComponents/PostComponent";
import { width } from "../constants/Layout";
import { shuffleArray } from "../utils/helperFunctions";
import { Audio } from "expo-av";
import { refreshSound } from "../../assets/sounds";

function FeedScreen({ navigation }: RootTabScreenProps<"Feed">) {

  const [posts, setPosts] = useState(mergePosts.slice(0, 10))
  const [refreshState, setRefreshState] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(refreshSound);
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
      setPosts(shuffleArray(posts))
      setRefreshState(false);
    }, 2000);
  };

  let viewableItemsIndexes: number = 0;
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    viewableItems.map((viableItem) => {
      if (viableItem.index) {
        viewableItemsIndexes = viableItem.index;
      }
    });
  };
  const viewabilityConfig = { itemVisiblePercentThreshold: 100 };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      if (e.target?.split("-")[0] == "Feed") {
        flatListRef?.current?.scrollToOffset?.({ animated: false, offset: 0 });
      }
    });

    return unsubscribe;
  }, [navigation]);
  const flatListRef = useRef<FlatList | null>(null);
  return (
    <View style={{ marginBottom: 120 }}>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.sectionHeadText}>Time Line</Text>
        <View style={styles.line} />
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
          data={posts}
          renderItem={useCallback(
            ({ item, index }) => (
              <PostComponent
                post={item}
                index={index}
                isViewable={viewableItemsIndexes == index}
              />
            ),
            []
          )}
          ref={flatListRef}
          keyExtractor={useCallback((_, index) => index.toString(), [])}
          initialNumToRender={5}
          windowSize={2}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={10}
          removeClippedSubviews={true}
          keyboardShouldPersistTaps="handled"
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
export { FeedScreen };

const styles = StyleSheet.create({
  postsContainer: {
    // flex: 1,
    marginTop: 30,
    marginBottom: 70,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  line: {
    marginTop: 20,
    width,
    height: 1,
    backgroundColor: myColors.black,
    opacity: 0.7,
  },
  sectionHeadText: {
    marginLeft: 15,
    fontSize: 22,
    color: myColors.black,
    fontWeight: "800",
  },
});
