import {
  FlatList,
  StyleSheet,
  View,
  RefreshControl,
  ViewToken,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Post, RootTabScreenProps } from "../types";
import { mergePosts } from "../../dummy/postsDummy/postsDummy";
import { theme } from "../constants/theme";
import { PostComponent } from "../components/postComponents/PostComponent";
import { shuffleArray } from "../utils/helperFunctions";
import { Audio } from "expo-av";
import { refreshSound } from "../../assets/sounds";
import SimpleHeader from "../components/SimpleHeader";
import { i18n } from "../translation/i18n";
import { hwrosh } from "../constants/Layout";

function FeedScreen({ navigation }: RootTabScreenProps<"Feed">) {
  const [posts, setPosts] = useState<Post[]>(mergePosts.slice(0, 10));
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
      setPosts(shuffleArray(posts));
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
    <View
      style={{
        flex: 1,
        backgroundColor: theme.baseBackground(),
      }}
    >
      <SimpleHeader title={i18n.t("timeLine")} />
      <View style={[styles.postsContainer, { marginBottom: hwrosh(6) }]}>
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
            [],
          )}
          ref={flatListRef}
          keyExtractor={useCallback(
            (item: string, index: number) => index.toString(),
            [],
          )}
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
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});
