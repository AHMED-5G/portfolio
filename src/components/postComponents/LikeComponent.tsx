import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { myColors } from "../../constants/myColors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { Audio } from "expo-av";
import { like2Sound } from "../../../assets/sounds/index";
type Props = {
  favoriteCounter: number;
  favoriteState: boolean;
  setFavoriteState: React.Dispatch<React.SetStateAction<boolean>>;
};

const LikeComponent = ({
  favoriteCounter,
  favoriteState,
  setFavoriteState,
}: Props) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(like2Sound);
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

  let scale = useSharedValue(1);
  const [localFavoriteCounter, setLocalFavoriteCounter] =
    useState(favoriteCounter);
  const onTap = useCallback(() => {
    scale.value = withSpring(1.5, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(10, withSpring(0));
      }
    });
  }, []);
  let rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        //Math.max to prevent with spring from flipping item because its going to negative
        scale: Math.max(scale.value, 1),
      },
    ],
  }));

  return (
    <TouchableOpacity
      style={{ height: 56, width: 56 }}
      onPress={() => {
        if (favoriteState) {
          setFavoriteState(false);
          onTap();
          playSound();
          setLocalFavoriteCounter((prev) => prev + 1);
        } else {
          setFavoriteState(true);
          setLocalFavoriteCounter((prev) => prev - 1);
        }
      }}
    >
      <Animated.View
        style={[styles.favoriteContainer, rStyle]}
        accessibilityRole="button"
        accessibilityHint={
          !favoriteState
            ? favoriteCounter + "likes " + "include You"
            : favoriteCounter + "likes "
        }
      >
        {localFavoriteCounter ? <Text>{localFavoriteCounter}</Text> : null}
        {favoriteState ? (
          <MaterialIcons
            disabled
            name="favorite-border"
            size={28}
            color="black"
          />
        ) : (
          <MaterialIcons
            disabled
            name="favorite"
            size={28}
            color={myColors.redFavorite}
          />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default LikeComponent;

const styles = StyleSheet.create({
  favoriteContainer: {
    flexDirection: "row",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 56,
    width: 56,
    marginLeft: 6,
  },
});
