import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Post } from "../../types";
import { Video, AVPlaybackStatus, ResizeMode } from "expo-av";
import { circularRatio, hwrosh, width, wwrosw } from "../../constants/Layout";
import { PostAuthor } from "./PostAuthor";
import { PostText } from "./PostText";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MyCustomSkeleton from "../MyCustomSkeleton";
type Props = {
  post: Post;
  isViewable: boolean;
  index: number;
};

const VideoPostComponent = ({ post, isViewable }: Props) => {
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
      <View style={{ marginTop: hwrosh(10) }}>
        <PostText text={post.text} />
      </View>
      <View
        style={[
          styles.videoContainer,
          { height: hwrosh(250), width: width - wwrosw(20) },
        ]}
      >
        {videoLoading && (
          <View
            style={[
              styles.videoContainer,
              {
                height: hwrosh(250),
                width: width - wwrosw(20),
                position: "absolute",
                zIndex: 1,
              },
            ]}
          >
            <MyCustomSkeleton
              style={{
                // marginTop: hwrosh(10),
                height: hwrosh(250),
                width: width - wwrosw(20),
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            />
          </View>
        )}
        <Video
          accessibilityHint="video"
          ref={video}
          style={[styles.video, { height: hwrosh(240) }]}
          source={{
            uri: post?.video ?? "",
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
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
            <Feather
              disabled
              name="play"
              size={circularRatio(74)}
              color="white"
            />
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
              size={circularRatio(74)}
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
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
