import { StyleSheet } from "react-native";
import { width } from "../../../constants/Layout";

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
export const productCardBorderRadius = 20;
