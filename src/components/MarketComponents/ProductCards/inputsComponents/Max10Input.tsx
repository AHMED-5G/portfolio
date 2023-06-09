import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  FlatList,
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
import { Extrapolate } from "react-native-reanimated";

type Props = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const Max10Input = ({ setCounter, counter }: Props) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const openMiniNumPadProgress = useSharedValue(0);
  const iconSize = 39;
  const initialContainerHeight = 60;
  const finalContainerHeight = 80;
  const plusMinusInitialWidth = productCardWidth / 2 + 30;
  const miniNumPadRStyle = useAnimatedStyle(() => {
    const toWidth = interpolate(
      openMiniNumPadProgress.value,
      [0, 1],
      [0, productCardWidth - 20],
      Extrapolate.CLAMP
    );
    const toHeight = interpolate(
      openMiniNumPadProgress.value,
      [0, 1],
      [0, finalContainerHeight]
    );
    return {
      width: toWidth,
      height: toHeight,
    };
  });

  const inputContainerRStyle = useAnimatedStyle(() => {
    const toWidth = interpolate(
      openMiniNumPadProgress.value,
      [0, 1],
      [plusMinusInitialWidth, productCardWidth - 20],
      Extrapolate.CLAMP
    );
    const toHeight = interpolate(
      openMiniNumPadProgress.value,
      [0, 1],
      [initialContainerHeight, finalContainerHeight]
    );
    return {
      width: toWidth,
      height: toHeight,
    };
  });

  const plusMinusContainerRStyle = useAnimatedStyle(() => {
    const toHeight = interpolate(
      openMiniNumPadProgress.value,
      [0, 1],
      [initialContainerHeight, 0]
    );

    const toOpacity = interpolate(openMiniNumPadProgress.value, [0, 1], [1, 0]);

    return {
      height: toHeight,
      opacity: toOpacity,
    };
  });

  const oneTextRStyle = useAnimatedStyle(() => {
    const toOpacity = interpolate(
      openMiniNumPadProgress.value,
      [0.5, 1],
      [1, 0]
    );
    const toHeight = interpolate(
      openMiniNumPadProgress.value,
      [0, 1],
      [iconSize, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity: toOpacity,
      height: toHeight,
    };
  });
  const XTextRStyle = useAnimatedStyle(() => {
    const toOpacity = interpolate(openMiniNumPadProgress.value, [0, 1], [0, 1]);
    const toHeight = interpolate(
      openMiniNumPadProgress.value,
      [0, 1],
      [0, iconSize],
      Extrapolate.CLAMP
    );
    return {
      opacity: toOpacity,
      height: toHeight,
    };
  });

  const closeNumPad = () => {
    openMiniNumPadProgress.value = withSpring(0, { overshootClamping: false });
  };

  const openMiniNumPad = () => {
    openMiniNumPadProgress.value = withSpring(1, { overshootClamping: false });
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={[
          {
            width: plusMinusInitialWidth,
            height: initialContainerHeight,
            borderRadius: 10,
            borderWidth: 0.7,
            borderColor: theme.borderColor,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          },
          inputContainerRStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              width: plusMinusInitialWidth,
              overflow: "hidden",
            },
            plusMinusContainerRStyle,
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              setCounter((prev) => prev + 1);
            }}
            onLongPress={() => {
              setCounter(10);
            }}
            accessibilityHint="add one or long Pres to add 10"
            style={[styles.iconContainer, { marginLeft: 5 }]}
          >
            <AntDesign
              disabled
              name="pluscircleo"
              size={iconSize}
              color={
                theme.darkTheme ? theme.secondaryColor() : theme.actionColor
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 48,
              height: 48,
              borderRadius: 10,
              backgroundColor: "#EEE",
              margin: 5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              ...theme.elevationAndShadow(),
            }}
            onPress={() => {
              openMiniNumPad();
            }}
          >
            {
              <Animated.Text
                style={[
                  {
                    fontSize: 24,
                    fontWeight: "600",
                    marginLeft: 10,
                    marginRight: 10,
                  },
                  oneTextRStyle,
                ]}
              >
                {counter}
              </Animated.Text>
            }
          </TouchableOpacity>
          <TouchableOpacity
            disabled={counter == 1}
            onPress={() => {
              setCounter((prev) => prev - 1);
              if (openMiniNumPadProgress.value == 1) {
                closeNumPad();
              }
            }}
            onLongPress={() => {
              setCounter(1);
            }}
            accessibilityHint="remove one or long Pres to reset to 1"
            style={[styles.iconContainer, { marginRight: 5 }]}
          >
            <AntDesign
              disabled
              name="minuscircleo"
              size={iconSize}
              color={counter == 1 ? theme.disableColor : theme.iconColor()}
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            {
              width: 0,
              height: 0,
              borderRadius: 10,
              borderWidth: 0.7,
              borderColor: theme.borderColor,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              position: "absolute",
              left: 0,
            },
            miniNumPadRStyle,
          ]}
        >
          <FlatList
            horizontal
            data={[3, 4, 5, 6, 7, 8, 9, 10].filter(
              (number) => number != counter
            )}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={({ pressed }) => [
                    pressed
                      ? [styles.calculatorItem, { opacity: 0.5 }]
                      : styles.calculatorItem,
                  ]}
                  onPress={() => {
                    closeNumPad();
                    setCounter(item);
                  }}
                >
                  <Text style={{ fontSize: 26, fontWeight: "bold" }}>
                    {item}
                  </Text>
                </Pressable>
              );
            }}
            keyExtractor={(item) => item.toString()}
            showsVerticalScrollIndicator={false}
          />
        </Animated.View>
      </Animated.View>
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

    // marginLeft: 15,
    // marginRight: 15,
  },
  calculatorItem: {
    width: 58,
    height: 58,
    borderRadius: 10,
    backgroundColor: "#EEE",
    margin: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
