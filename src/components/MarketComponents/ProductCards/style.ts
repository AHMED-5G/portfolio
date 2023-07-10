import { StyleSheet } from "react-native";
import { fontRatio, hwrosh, width, wwrosw } from "../../../constants/Layout";
import { theme } from "../../../constants/myColors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: fontRatio(20),
  },
});

export const productCardWidth = width - wwrosw(20);
export const productCardHeight = hwrosh(470);
// export const productCardBorderRadius = 20;
export const productCardBorderRadius = theme.borderRadius;
export const inCalculationTextSize = fontRatio(35);
export const priceInitialSize = fontRatio(45);
