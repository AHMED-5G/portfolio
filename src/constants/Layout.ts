import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const width = Dimensions.get("screen").width;
export const height = Dimensions.get("screen").height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
