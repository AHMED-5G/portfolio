import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { theme } from "../../../../constants/myColors";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { productCardWidth } from "../style";

type Props = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const Max10Input = ({ setCounter, counter }: Props) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const openMiniNumPadProgress = useSharedValue(0);
  const iconSize = 34;
  const plusMinusInitialWidth = productCardWidth / 2;
  const miniNumPadRStyle = useAnimatedStyle(() => {
    const toWidth = interpolate(
      openMiniNumPadProgress.value,
      [0, 1],
      [plusMinusInitialWidth, productCardWidth - 20]
    );
    const toHeight = interpolate(openMiniNumPadProgress.value, [0, 1], [0, 50]);
    return {
      width: toWidth,
      height: toHeight,
    };
  });

  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        // backgroundColor: "orange",
      }}
    >
      <Animated.View
        style={[
          {
            width: plusMinusInitialWidth,
            height: 0,
            borderRadius: 10,
            borderWidth: 0.7,
            borderColor: theme.borderColor,
            backgroundColor: "green",
          },
          miniNumPadRStyle,
        ]}
      >
        <Text>Test</Text>
      </Animated.View>
      <View
        style={[
          {
            width: plusMinusInitialWidth,
            height: 50,
            borderRadius: 10,
            borderWidth: 0.7,
            borderColor: theme.borderColor,
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "orange",
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            setCounter((prev) => prev + 1);
          }}
          onLongPress={() => {
            console.log("longPress");
            openMiniNumPadProgress.value = withSpring(1);
          }}
          style={[styles.iconContainer]}
        >
          <AntDesign
            disabled
            name="pluscircleo"
            size={iconSize}
            color={theme.actionColor}
          />
        </TouchableOpacity>
        <View style={{}}>
          {counter == 1 && (
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
              }}
            >
              {counter}
            </Text>
          )}
        </View>
        <TouchableOpacity
          disabled={counter == 1}
          onPress={() => {
            setCounter((prev) => prev - 1);
          }}
          style={[styles.iconContainer, {}]}
        >
          <AntDesign
            disabled
            name="minuscircleo"
            size={iconSize}
            color={counter == 1 ? theme.disableColor : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Max10Input;

const styles = StyleSheet.create({
  iconContainer: {
    width: 48,
    height: 48,
    // backgroundColor: "pink",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
