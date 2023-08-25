import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { myColors, theme } from "../../constants";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { Audio } from "expo-av";
import { like2Sound } from "../../../assets/sounds/index";
import { circularRatio, hwrosh, wwrosw } from "../../constants/Layout";
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

  const scale = useSharedValue(1);
  const [localFavoriteCounter, setLocalFavoriteCounter] =
    useState(favoriteCounter);
  const onTap = useCallback(() => {
    scale.value = withSpring(1.5, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(10, withSpring(0));
      }
    });
  }, []);
  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        //Math.max to prevent with spring from flipping item because its going to negative
        scale: Math.max(scale.value, 1),
      },
    ],
  }));

  return (
    <TouchableOpacity
      style={{ height: hwrosh(56), width: wwrosw(56) }}
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
        style={[
          styles.favoriteContainer,
          {
            marginRight: wwrosw(10),
            height: hwrosh(56),
            width: wwrosw(56),
            marginLeft: wwrosw(6),
          },
          rStyle,
        ]}
        accessibilityRole="button"
        accessibilityHint={
          !favoriteState
            ? favoriteCounter + "likes " + "include You"
            : favoriteCounter + "likes "
        }
      >
        {localFavoriteCounter ? (
          <Animated.Text
            style={{ color: theme.baseTextColor(), overflow: "hidden" }}
            key={localFavoriteCounter}
          >
            {localFavoriteCounter}
          </Animated.Text>
        ) : null}
        {favoriteState ? (
          <MaterialIcons
            disabled
            name="favorite-border"
            size={circularRatio(28)}
            color={theme.iconColor()}
          />
        ) : (
          <MaterialIcons
            disabled
            name="favorite"
            size={circularRatio(28)}
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
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    overflow: "hidden",
  },
});
