import { TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { theme } from "../../constants/theme";
import { circularRatio, hwrosh, wwrosw } from "../../constants/Layout";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { ModalCloseEasing } from "../myCustomModal/constants";

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  sharedValue?: SharedValue<number>;
};

const BackComponent = ({ navigation, sharedValue }: Props) => {
  const backArrowRotate = useDerivedValue(() => {
    if (sharedValue && sharedValue.value !== undefined) {
      return interpolate(
        sharedValue.value,
        [0, 1],
        [0, 90],
        Extrapolation.CLAMP,
      );
    }
    return 0;
  });

  const backArrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: backArrowRotate.value + "deg",
        },
      ],
    };
  });
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: wwrosw(48),
        height: hwrosh(48),
        transform: theme.iconLocalizationTransform(),
      }}
      accessibilityHint="navigation back"
      onPress={() => {
        if (sharedValue && sharedValue.value > 0) {
          sharedValue.value = withTiming(0, {
            easing: ModalCloseEasing,
          });
        } else {
          navigation.goBack();
        }
      }}
      onLongPress={() => {
        if (
          sharedValue &&
          sharedValue.value !== undefined &&
          sharedValue.value !== 1
        ) {
          sharedValue.value = withTiming(1);
        }
        if (
          sharedValue &&
          sharedValue.value !== undefined &&
          sharedValue.value !== 0
        ) {
          sharedValue.value = withTiming(0, {
            easing: ModalCloseEasing,
          });
        }
      }}
    >
      <Animated.View style={[backArrowAnimatedStyle]}>
        <AntDesign
          disabled
          name="arrowleft"
          size={circularRatio(38)}
          color={theme.iconColor()}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default BackComponent;
