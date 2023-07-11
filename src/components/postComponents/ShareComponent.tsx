import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { theme } from "../../constants/myColors";
import { Audio } from "expo-av";
import { showToast } from "../../utils/helperFunctions";
import { noSound } from "../../../assets/sounds";
import { i18n } from "../../translation/i18n";
import {
  averageRatio,
  circularRatio,
  hwrosh,
  wwrosw,
} from "../../constants/Layout";

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
        style={styles.shareContainer}
        accessibilityRole="button"
        accessibilityHint="Share"
        onPress={() => {
          playSound();
          showToast(
            i18n.t("thisFeatureIsCurrentlyUnavailable"),
            theme.alertWarningColor as string
          );
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
    margin: averageRatio(5),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: hwrosh(48),
    width: wwrosw(48),
  },
});
