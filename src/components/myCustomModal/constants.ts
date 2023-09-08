import { EasingFunction } from "react-native";
import { Easing, EasingFunctionFactory } from "react-native-reanimated";

export const ModalCloseEasing: EasingFunction | EasingFunctionFactory = Easing.inOut(
  Easing.back(1.8),
);
