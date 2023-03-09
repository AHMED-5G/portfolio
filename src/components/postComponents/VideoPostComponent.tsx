import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Post } from "../../types";
import { Video, AVPlaybackStatus, ResizeMode } from "expo-av";
import { width } from "../../constants/Layout";
import { PostAuthor } from "./PostAuthor";
import { PostText } from "./PostText";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import LoadingIndicator from "../mini/LoadingIndicator";
import SkeletonLoader from "expo-skeleton-loader";
import { theme } from "../../constants/myColors";
import MyCustomSkeleton from "../MyCustomSkeleton";
type Props = {
  post: Post;
  isViewable: boolean;
  index: number;
};

const VideoPostComponent = ({ post, isViewable, index }: Props) => {
  const video = React.useRef<Video | null>(null);

  const [isPlaying, setIsPlaying] = useState<AVPlaybackStatus>();
  useEffect(() => {
    if (isViewable == false) {
      video.current?.pauseAsync();
    }
  }, [isViewable]);
  const navigation = useNavigation();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      video?.current?.pauseAsync();
    });

    return unsubscribe;
  }, [navigation]);
  const [videoLoading, setVideoLoading] = useState(false);
  const [showPauseButton, setShowPauseButton] = useState(false);
  function SkeltonItem() {
    return (
      <SkeletonLoader
        boneColor="#EEE"
        highlightColor={theme.primary}
        duration={1000}
      >
        <SkeletonLoader.Item style={styles.videoContainer} />
      </SkeletonLoader>
    );
  }
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <PostAuthor user={post.by!} />
      </View>
      <View style={{ marginTop: 10 }}>
        <PostText text={post.text} />
      </View>
      <View style={[styles.videoContainer]}>
        {videoLoading && (
          <View
            style={[
              styles.videoContainer,
              {
                position: "absolute",
                zIndex: 1,
              },
            ]}
          >
            <MyCustomSkeleton style={styles.videoContainer} />
          </View>
        )}
        <Video
          accessibilityHint="video"
          ref={video}
          style={styles.video}
          source={{
            uri: post?.video!,
          }}
          onLoadStart={() => {
            setVideoLoading(true);
          }}
          onLoad={() => {
            setVideoLoading(false);
          }}

          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={(status) => {
            //@ts-ignore
            setIsPlaying(status.isPlaying);
          }}
          onTouchStart={() => {
            if (isPlaying) {
              setShowPauseButton(true);
              setTimeout(() => {
                setShowPauseButton(false);
              }, 2000);
            }
          }}
        />
        <TouchableOpacity
          accessibilityHint="play video"
          style={{ position: "absolute", zIndex: 1 }}
          onPress={() => {
            video.current?.playAsync();
            // setCurrentViableState(true);
          }}
        >
          {!isPlaying && (
            <Feather disabled name="play" size={74} color="white" />
          )}
        </TouchableOpacity>

        {showPauseButton && (
          <TouchableOpacity
            accessibilityHint="pause video"
            style={{ position: "absolute", zIndex: 1 }}
            onPress={() => {
              video.current?.pauseAsync();
              setShowPauseButton(false);
            }}
          >
            <MaterialIcons
              disabled
              name="pause-circle-outline"
              size={74}
              color="white"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export { VideoPostComponent };

const styles = StyleSheet.create({
  video: {
    height: 240,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    marginTop: 10,
    height: 250,
    width: width - 20,

    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
