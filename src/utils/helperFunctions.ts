import { AccessibilityInfo } from "react-native";
import Toast from "react-native-root-toast";
import { AccountTypes, User } from "../types";
import { faker } from "@faker-js/faker";
export const showToast = (message: string, backgroundColor: string) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor,
    textColor: "black",
    containerStyle: { height: 48 },
    opacity: 1,
    onShow: () => {
      AccessibilityInfo.announceForAccessibility(message);
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    },
  });
};

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

export const getContributorAccountName = (accountType: AccountTypes) => {
  switch (accountType) {
    case AccountTypes.Behance:
      return "Behance";

    case AccountTypes.Facebook:
      return "Facebook";

    case AccountTypes.Github:
      return "Github";

    case AccountTypes.Twitter:
      return "Twitter";

    case AccountTypes.LinkedIn:
      return "LinkedIn";

    case AccountTypes.Dribbble:
      return "Dribbble";
    default:
      break;
  }
};

