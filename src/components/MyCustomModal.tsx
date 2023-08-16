import { TouchableOpacity, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import Animated, {
  Easing,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { height } from "../constants/Layout";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../constants/myColors";

type Props = {
  sharedValue: SharedValue<number>;
  finalTop: number;
  Content: ReactNode;
  style?: ViewStyle;
  title?: ReactNode;
};

const MyCustomModal = ({
  sharedValue,
  finalTop,
  Content,
  style,
  title,
}: Props) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            sharedValue.value,
            [0, 1],
            [height, finalTop],
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          position: "absolute",
          width: "100%",
          backgroundColor: theme.cardBackground(),
        },
        style,
      ]}
    >
      <View style={{ flexDirection: "row", width: "100%" }}>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          {title}
        </View>
        <TouchableOpacity
          onPress={() =>
            (sharedValue.value = withTiming(0, {
              easing: Easing.inOut(Easing.back(1.8)),
            }))
          }
          style={{
            margin: 5,
          }}
        >
          <AntDesign name="closesquareo" size={24} color={theme.iconColor()} />
        </TouchableOpacity>
      </View>
      {Content}
    </Animated.View>
  );
};

export default MyCustomModal;
