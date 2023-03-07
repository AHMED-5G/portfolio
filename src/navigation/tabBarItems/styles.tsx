import { myColors, theme } from "../../constants/myColors";
import {
  StyleProp,

  ViewStyle,
} from "react-native";

export const tabContainerStyle: StyleProp<ViewStyle> = {
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  marginTop: 12,
  width: 70,
};

export const tabColor = (isFocused: boolean) => {
  // return isFocused ? "#5184E5" : "white";
  return isFocused ? myColors.blueA : theme.primaryText;
};

export const tabTextStyle = (isFocused: boolean) => {
  return { color: isFocused ? "#5184E5" : "white", fontSize: 12 };
};
