import { TouchableOpacity, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { AntDesign } from "@expo/vector-icons";
import { circularRatio, height } from "../../constants/Layout";
import { theme } from "../../constants/theme";
import ModalTitle from "./components/ModalTitle";
import { ModalCloseEasing } from "./constants";
import MyLine from "../MyLine";

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
  title = <ModalTitle />,
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
        {
          position: "absolute",
          width: "100%",
          backgroundColor: theme.cardBackground(),
        },
        animatedStyle,
        style,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
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
              easing: ModalCloseEasing,
            }))
          }
          style={{
            margin: 5,
          }}
        >
          <AntDesign
            name="closesquareo"
            size={circularRatio(24)}
            color={theme.iconColor()}
          />
        </TouchableOpacity>
      </View>
      <MyLine lineStyle={{ marginTop: 0 }} />
      {Content}
    </Animated.View>
  );
};

export default MyCustomModal;
