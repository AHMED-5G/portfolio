import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Post } from "../../types";
import { Video, AVPlaybackStatus, ResizeMode } from "expo-av";
import { width } from "../../constants/Layout";
type Props = {
  post: Post;

};

const VideoPostComponent = ({
  post,

}: Props) => {
  const video = React.useRef<Video | null>(null);
  const [status, setStatus] = React.useState({});
  const [videoo, setVideoo] = useState<Video | null>();
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   console.log(whoIsRunningIam)
  //   if (whoIsRunningIam != video.current) {
  //     video.current?.pauseAsync();
  //   }else{
  //     video.current?.playAsync();

  //   }
  // }, [whoIsRunningIam]);


  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: post?.video!,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        // isLooping

        // onPlaybackStatusUpdate={(status) => setIsPlaying(status.isPlaying)}
        // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={{}}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => {
            // console.log(video.current);
            
            isPlaying
              ? video.current?.pauseAsync()
              : video.current?.playAsync();
          }}
        />
      </View>
    </View>
  );
};

export { VideoPostComponent };

const styles = StyleSheet.create({
  video: {
    height: 200,
    // width: 200,
  },
});
