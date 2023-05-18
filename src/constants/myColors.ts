import { ColorValue, FlexStyle } from "react-native";
import * as Localization from "expo-localization";
import { ReadingThemesCombo } from "../types";

export const myColors = {
  main: "#CD9575",
  secondary: "#007FFF",
  primary: "#8AE7E1",
  AshGray: "#B2BEB5",
  AzureX11: "#F0FFFF",
  Blond: "#FAF0BE",
  AngryPasta: "#ffcc55",
  Antique: "#8b846d",
  ApolloLanding: "#e5e5e1",
  Baltic: "#279d9f",
  EbayRed: "#e53238",
  grey1: "#43484d",
  grey2: "#5e6977",
  grey3: "#86939e",
  grey4: "#bdc6cf",
  grey5: "#e1e8ee",
  orange: "#ff8c52",
  white: "white",
  lightGreen: "#66DF48",
  like1: "#A8D8FF",
  red: "#EF4444",
  redPlus: "#FF1744",
  redFavorite: "#e0576e",
  sky: "#00ccff",
  lightBlue: "#6d73e9f2",
  heavyBlue: "#008fa1",
  medBlue: "#2fe0fe",
  grey: "#dbdae0",
  yy: "#fcefab",
  black: "black",
  blueA: "#0048BA",
  tr: "trans",
};

export const readingThemes: ReadingThemesCombo[] = [
  {
    fontColor: "#000000",
    backGroundColor: "#FFFFFF",
  },
  {
    fontColor: "#ffffff",
    backGroundColor: "#230d9a",
  },
  {
    fontColor: "#000000",
    backGroundColor: "#90d8b2",
  },
  {
    fontColor: "#000000",
    backGroundColor: "#8babf1",
  },
  {
    fontColor: "#FFFFFF",
    backGroundColor: "#000000",
  },
];

export interface UserConfigurationInterface {
  nightMood: boolean;
}

export const userConfiguration: UserConfigurationInterface = {
  nightMood: true,
};

interface ThemeInterface {
  nightMood: boolean;

  baseBackground: () => ColorValue;
  baseTextColor: () => ColorValue;

  primary: () => ColorValue;
  primaryText: () => ColorValue;

  tabBarBackground: () => ColorValue;

  secondary: ColorValue;
  secondaryText: "#FFF";

  actionColor: ColorValue;
  actionColorText: "#FFF";

  white: ColorValue;
  black: ColorValue;

  alertSuccessColor: ColorValue;
  alertInfoColor: ColorValue;
  alertWarningColor: ColorValue;
  alertFailColor: ColorValue;
  alertTextColor: "#000";

  cardBackground: () => ColorValue;
  cardBackgroundColorValue: ColorValue;
  cardText: () => ColorValue;

  iconColor: () => ColorValue;
  activeIconColor: () => ColorValue;

  actionButtonBackground: () => ColorValue;
  actionButtonTextColor: () => ColorValue;

  tabBarHeight: number;

  tabBarTextColor: ColorValue;
  tabBarBorderRadius: number;
  tabBarLeftSectionColor: () => ColorValue;

  cardBorderRadiusWidthFactor: number;
  borderRadius: number;
  buttonBorderRadius: number;
  borderColor: ColorValue;
  disableColor: ColorValue;

  warning: ColorValue;

  localizationRtl: boolean;
  localizationFlexDirection: FlexStyle["flexDirection"] | undefined;
  freezeInLeftWhenIsRTLTrue: () => FlexStyle["flexDirection"];
  localizationDirection?: "rtl" | "ltr";
  iconLocalizationTransform: () => [{ rotateY: string }];
  readingTheme: ReadingThemesCombo;
}

export const theme: ThemeInterface = {
  nightMood: false,

  baseBackground: function () {
    return this.nightMood ? "#141414" : "";
  },
  baseTextColor: function () {
    return this.nightMood ? "#FFF" : "#000";
  },

  primary: function () {
    return !this.nightMood ? "#dddcec" : "#282828";
  },
  primaryText: function () {
    return !this.nightMood ? "#000" : "#fff";
  },

  tabBarBackground: function () {
    return this.nightMood ? "#141414" : "#fff";
  },

  secondary: "#6a154e",
  secondaryText: "#FFF",

  actionColor: "#0048BA",

  actionColorText: "#FFF",

  white: "white",
  black: "black",

  alertSuccessColor: "#b0f2b4",
  alertInfoColor: "#bad7f2",
  alertWarningColor: "#f2e2ba",
  alertFailColor: "#f2bac9",
  alertTextColor: "#000",

  cardBackground: function () {
    return !this.nightMood ? "white" : "#282828";
  },

  cardText: function () {
    return this.baseTextColor();
  },

  iconColor: function () {
    return this.nightMood ? "#a79ea1" : "#000";
  },

  activeIconColor: function () {
    return this.nightMood ? "#FFF" : "#0048BA";
  },

  actionButtonBackground: function () {
    return this.nightMood ? "#282828" : "#0048BA";
  },
  
  actionButtonTextColor: function () {
    return this.nightMood ? "#c7d0e0" : "#FFF";
  },

  borderColor: myColors.grey5,
  disableColor: myColors.grey5,

  warning: "#FF0000",

  tabBarHeight: 70,
  // tabBarBackground: "#FFF",
  tabBarTextColor: "#000",
  tabBarBorderRadius: 10,
  tabBarLeftSectionColor: function () {
    return !this.nightMood ? this.primary() : "#282828";
  },

  cardBackgroundColorValue: "#FFF",
  cardBorderRadiusWidthFactor: 0.05,
  borderRadius: 10,
  buttonBorderRadius: 5,

  localizationDirection: undefined,
  localizationRtl: Localization.isRTL,
  localizationFlexDirection: undefined,
  iconLocalizationTransform: function () {
    return [{ rotateY: this.localizationRtl ? "180deg" : "0deg" }];
  },
  freezeInLeftWhenIsRTLTrue: function () {
    return this.localizationRtl ? "row-reverse" : "row";
  },

  readingTheme: readingThemes[0],
};
