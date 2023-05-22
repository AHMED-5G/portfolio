import { StyleSheet, View } from "react-native";
import React, { useMemo, useState } from "react";
import Comments from "./Comments";
import { Post } from "../../types";
import {
  generateRandomBoolean,
  getRandomOneItemFromList,
  randomIntNumber,
} from "../../utils/helperFunctions";
import LikeComponent from "./LikeComponent";
import ShareComponent from "./ShareComponent";
import WriteCommentSection from "./WriteCommentSection";
import { users } from "../../../dummy/Users";
import { Audio } from "expo-av";
import { comment2Sound } from "../../../assets/sounds";
type Props = {
  post: Post;
};

const PostOptions = ({ post }: Props) => {
  const [commentText, setCommentText] = useState("");
  const [writeCommentState, setWriteCommentState] = useState(false);
  const shareCounter = useMemo(() => randomIntNumber(200), []);
  const favoriteCounter = useMemo(() => randomIntNumber(300), []);
  const [favoriteState, setFavoriteState] = useState<boolean>(
    generateRandomBoolean()
  );
  const [showComments, setShowComments] = useState(false);

  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(comment2Sound);
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
  const sendComment = () => {
    post.comments?.unshift({
      body: commentText,
      timeStamp: Date.now().toString(),
      by: { ...getRandomOneItemFromList(users), name: "You" },
      favoriteCounter: 0,
    });
    setCommentText("");
    playSound();
  };
  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        {!writeCommentState && (
          <LikeComponent
            {...{
              favoriteCounter,
              favoriteState,
              setFavoriteState,
            }}
          />
        )}
        <WriteCommentSection
          {...{
            post,
            commentText,
            setCommentText,
            showComments,
            setShowComments,
            writeCommentState,
            setWriteCommentState,
            sendComment,
            
          }}
        />
        {!writeCommentState && <ShareComponent {...{ shareCounter }} />}
      </View>
      <View>
        {showComments && post.comments && <Comments comments={post.comments} />}
      </View>
    </View>
  );
};

export default PostOptions;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    alignItems: "center",
  },
});
