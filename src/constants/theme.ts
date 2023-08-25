import {
  Appearance,
  ColorValue,
  FlexStyle,
  I18nManager,
  ShadowStyleIOS,
  TextStyle,
} from "react-native";
import { ReadingThemesCombo } from "../types";
import { ViewStyle } from "react-native";
import { averageRatio, hwrosh } from "./Layout";
import { myColors } from "./Colors";
import { FontSizeEnum, fontSizeEntries } from "./fontSizes";

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

interface ThemeInterface {
  darkTheme: boolean;

  baseBackground: () => ColorValue;
  baseTextColor: (opacity?: number) => ColorValue;

  primary: () => ColorValue;
  primaryText: () => ColorValue;
  secondaryColor: () => ColorValue;
  secondaryColorText: () => ColorValue;

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

  error: ColorValue;
  textError: () => ColorValue;

  localizationRtl: boolean;
  localizationFlexDirection: FlexStyle["flexDirection"] | undefined;
  freezeInLeftWhenIsRTLTrue: () => FlexStyle["flexDirection"];
  localizationDirection?: "rtl" | "ltr";
  iconLocalizationTransform: () => [{ rotateY: string }];
  readingTheme: ReadingThemesCombo;

  elevationAndShadow: () => {
    elevation: ViewStyle["elevation"];
    shadowColor: ShadowStyleIOS["shadowColor"];
    shadowOffset: ShadowStyleIOS["shadowOffset"];
    shadowOpacity: ShadowStyleIOS["shadowOpacity"];
    shadowRadius: ShadowStyleIOS["shadowRadius"];
  };

  fontSize: { [key in FontSizeEnum]: TextStyle["fontSize"] };
}
export interface UserConfigurationInterface {
  darkTheme: boolean;
}
1;
export const theme: ThemeInterface = {
  darkTheme: Appearance.getColorScheme() == "dark" ? true : false,

  baseBackground: function () {
    return this.darkTheme ? "#141414" : "";
  },

  baseTextColor: function (opacity = 1) {
    return this.darkTheme
      ? `rgba(255, 255, 255, ${opacity})`
      : `rgba(0, 0, 0, ${opacity})`;
  },

  primary: function () {
    return !this.darkTheme ? "#dddcec" : "#282828";
  },
  primaryText: function () {
    return !this.darkTheme ? "#000" : "#fff";
  },

  tabBarBackground: function () {
    return this.darkTheme ? "#141414" : "#fff";
  },

  secondary: "#6a154e",
  secondaryText: "#FFF",

  secondaryColor: function () {
    return this.darkTheme ? "#e6dadd" : "#6a154e";
  },

  secondaryColorText: function () {
    return this.darkTheme ? "#000" : "#FFF";
  },

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
    return !this.darkTheme ? "white" : "#282828";
  },

  cardText: function () {
    return this.baseTextColor();
  },

  iconColor: function () {
    return this.darkTheme ? "#a79ea1" : "#000";
  },

  activeIconColor: function () {
    return this.darkTheme ? "#FFF" : "#0048BA";
  },

  actionButtonBackground: function () {
    return this.darkTheme ? "#282828" : "#0048BA";
  },

  actionButtonTextColor: function () {
    return this.darkTheme ? "#c7d0e0" : "#FFF";
  },

  borderColor: myColors.grey4,
  disableColor: myColors.grey3,

  error: "#b00020",

  textError: function () {
    return this.darkTheme ? "#dddcec" : this.error;
  },

  tabBarHeight: hwrosh(70),
  // tabBarBackground: "#FFF",
  tabBarTextColor: "#000",
  tabBarBorderRadius: averageRatio(10),
  tabBarLeftSectionColor: function () {
    return !this.darkTheme ? this.primary() : "#282828";
  },

  cardBackgroundColorValue: "#FFF",
  cardBorderRadiusWidthFactor: 0.05,
  borderRadius: averageRatio(10),
  buttonBorderRadius: averageRatio(5),

  localizationDirection: undefined,
  localizationRtl: I18nManager.isRTL,
  localizationFlexDirection: "row",
  iconLocalizationTransform: function () {
    return [{ rotateY: this.localizationRtl ? "180deg" : "0deg" }];
  },
  freezeInLeftWhenIsRTLTrue: function () {
    return this.localizationRtl ? "row-reverse" : "row";
  },

  readingTheme: readingThemes[0],

  elevationAndShadow: function () {
    return {
      elevation: 2,
      shadowColor: this.darkTheme ? "#463f41" : "#282828",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
    };
  },

  fontSize: Object.fromEntries(fontSizeEntries),
};
