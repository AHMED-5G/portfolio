import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";
import { Audio } from "expo-av";
import { noSound } from "../../../assets/sounds";
import { i18n } from "../../translation/i18n";
import {
  averageRatio,
  circularRatio,
  hwrosh,
  wwrosw,
} from "../../constants/Layout";
import { showToastV3 } from "../../utils";

type Props = {
  shareCounter: number;
};

const ShareComponent = ({ shareCounter }: Props) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(noSound);
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

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <TouchableOpacity
        style={[
          styles.shareContainer,
          { margin: averageRatio(5), height: hwrosh(48), width: wwrosw(48) },
        ]}
        accessibilityRole="button"
        accessibilityHint="Share"
        onPress={() => {
          playSound();
          showToastV3(i18n.t("thisFeatureIsCurrentlyUnavailable"));
        }}
      >
        <SimpleLineIcons
          name="share"
          size={circularRatio(25)}
          color={theme.iconColor()}
        />
        <Text
          accessibilityRole="text"
          accessibilityHint={shareCounter + "users shared this post"}
          style={{ color: theme.baseTextColor() }}
        >
          {shareCounter}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShareComponent;

const styles = StyleSheet.create({
  shareContainer: {
    flexDirection: "row",

    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
