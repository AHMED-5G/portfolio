import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/myColors";
import { Audio } from "expo-av";
import { showToast } from "../../utils/helperFunctions";
import { noSound } from "../../../assets/sounds";
import { i18n } from "../../translation/i18n";
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
        <Ionicons
          disabled
          name="share-social"
          size={28}
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
    margin: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 48,
    width: 48,
  },
});
