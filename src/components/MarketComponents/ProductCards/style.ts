import { StyleSheet } from "react-native";
import { width } from "../../../constants/Layout";
import { theme } from "../../../constants/myColors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
  },
});

export const productCardWidth = width - 20;
export const productCardHeight = width;
// export const productCardBorderRadius = 20;
export const productCardBorderRadius = theme.borderRadius;
export const inCalculationTextSize = 35;
export const priceInitialSize = 45;
