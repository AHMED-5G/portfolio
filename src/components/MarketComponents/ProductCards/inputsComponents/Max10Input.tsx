import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React, { memo } from "react";
import { theme } from "../../../../constants/myColors";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { productCardWidth } from "../style";
import { Extrapolate } from "react-native-reanimated";
import {
  averageRatio,
  circularRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../../../../constants/Layout";

type Props = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const Max10Input = ({ setCounter, counter }: Props) => {
  const openMiniNumPadProgress = useSharedValue(0);
  const iconSize = circularRatio(39);
  const initialContainerHeight = hwrosh(60);
  const finalContainerHeight = hwrosh(80);
  const plusMinusInitialWidth = productCardWidth / 2 + wwrosw(30);
  const widthMargin = wwrosw(20);
  const miniNumPadRStyle = useAnimatedStyle(() => {
    const toWidth = interpolate(
      openMiniNumPadProgress.value,
      [0, 1],
      [0, productCardWidth - widthMargin],
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
      [plusMinusInitialWidth, productCardWidth - widthMargin],
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

  function closeNumPad() {
    openMiniNumPadProgress.value = withSpring(0, { overshootClamping: false });
  }

  function openMiniNumPad() {
    openMiniNumPadProgress.value = withSpring(1, { overshootClamping: false });
  }

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
            borderRadius: averageRatio(10),
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
            style={[styles.iconContainer, { marginLeft: wwrosw(5) }]}
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
              width: wwrosw(48),
              height: hwrosh(48),
              borderRadius: averageRatio(10),
              backgroundColor: "#EEE",
              margin: averageRatio(5),
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
                    fontSize: fontRatio(24),
                    fontWeight: "600",
                    marginLeft: wwrosw(10),
                    marginRight: wwrosw(10),
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
            style={[styles.iconContainer, { marginRight: wwrosw(5) }]}
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
              borderRadius: averageRatio(10),
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
                  <Text style={{ fontSize: fontRatio(26), fontWeight: "bold" }}>
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

export default memo(Max10Input);

const styles = StyleSheet.create({
  iconContainer: {
    width: wwrosw(48),
    height: hwrosh(48),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  calculatorItem: {
    width: wwrosw(58),
    height: hwrosh(58),
    borderRadius: averageRatio(10),
    backgroundColor: "#EEE",
    margin: averageRatio(5),
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
