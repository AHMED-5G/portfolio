import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import MedButton from "../mini/MedButton";
import { width } from "../../constants/Layout";
import { theme } from "../../constants/myColors";
import { AntDesign, Feather } from "@expo/vector-icons";
import { productCardWidth } from "./ProductCards/style";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = { counter: number };

const RemoveItemButton = ({ counter }: Props) => {
  const buttonHeight = 55;

  // const buttonWidth = 40;
  const openRemoveButton = useSharedValue(0);
  const buttonWidth = productCardWidth * 0.45 - 10;
  const removeButtonRStyle = useAnimatedStyle(() => {
    const toWidth = interpolate(
      openRemoveButton.value,
      [0, 1],
      [0, buttonWidth]
    );
    return {
      width: toWidth,
    };
  });

  // useEffect(() => {
  //   if (counter > 1) {
  //     openRemoveButton.value = withTiming(1, { duration: 400 });
  //   }
  // }, [counter]);
  return (
    <Animated.View>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          borderWidth: 0.5,
          borderColor: theme.warning,
          height: buttonHeight,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Text style={{ fontSize: 22, color: "black", fontWeight: "bold" }}>
            Remove
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: 60,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: theme.secondary,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: theme.secondaryText,
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              {counter}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default RemoveItemButton;

const styles = StyleSheet.create({});
