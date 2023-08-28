import { AccessibilityInfo } from "react-native";
import Toast from "react-native-root-toast";
import { AccountTypes, PostRequest } from "../types";
import { ApiResponse } from "shared-data/types";
import { ThemeInterface } from "../constants/theme";

export enum ToastPositions {
  Top = Toast.positions.TOP,
  Bottom = Toast.positions.BOTTOM,
  Center = Toast.positions.CENTER,
}

export const showToast = (
  message: string,
  backgroundColor: string,
  position: ToastPositions = Toast.positions.BOTTOM,
) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: position,
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

export const showToastV2 = (
  message: string,
  themeIsDark: ThemeInterface["darkTheme"],
  position: ToastPositions = Toast.positions.BOTTOM,
) => {
  const backgroundColor = themeIsDark ? "black" : "white";
  const textColor = themeIsDark ? "white" : "black";

  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: position,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor,
    textColor,
    containerStyle: { height: 48 },
    opacity: 1,

    onShow: () => {
      AccessibilityInfo.announceForAccessibility(message);
      // calls on toast's appear animation start
    },
    onShown: () => {
      // calls on toast's appear animation end.
    },
    onHide: () => {
      // calls on toast's hide animation start.
    },
    onHidden: () => {
      // calls on toast's hide animation end.
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

export function getRandomOneItemFromList<T>(list: Array<T>): T {
  return list[Math.floor(Math.random() * list.length)];
}

export function getRandomIntBetweenTow(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export function randomIntNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}
export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export function generateRandomBoolean() {
  return Math.random() < 0.5;
}

export function removeWhiteSpaceAtStart(text: string) {
  return text.replace(/^\s+/g, "");
}

export const addMinutesToNowTimeStamp = (minutes: number) => {
  const now = new Date();
  const newTime = new Date();
  newTime.setTime(now.getTime() + minutes * 60 * 1000);
  return newTime.getTime();
};

export async function postRequest<T extends object>({
  url,
  body,
  token,
  onSuccess,
  onElse,
  onError,
  onFinish,
  onStart,
}: PostRequest<T>): Promise<ApiResponse<T>> {
  onStart?.();
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const responseData: ApiResponse<T> = await response.json();

    if (responseData.status) {
      onSuccess?.(responseData.data);
    } else {
      if (responseData.error) onElse?.(responseData.error);
    }
    return responseData;
  } catch (error: unknown) {
    onError?.(error);
    throw error;
  } finally {
    onFinish?.();
  }
}
