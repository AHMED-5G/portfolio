import { showMessage } from "react-native-flash-message";
import { myColors } from "../constants/Colors";
import { width } from "../constants/Layout";

export function flash(message = "", type = "info") {
  showMessage({
    message: message,
    backgroundColor: type == "success" ? myColors.Baltic : "orange",
    position: "bottom",
    style: {
      // position: "absolute",

      width: width,
      marginBottom: 30,
      borderRadius: 12,
      padding: 10,
    },
    textStyle: { fontSize: 14 },
  });
}

export function isInstanceBySomeKeys<T extends object>(
  object: object,
  key: keyof T,
  ...keys: Array<keyof T>
): object is T {
  const allKeys: (keyof T)[] = [key, ...keys];

  for (let index = 0; index < allKeys.length; index++) {
    if (allKeys[index] in object == false) {
      return false;
    }
  }

  return true;
}
