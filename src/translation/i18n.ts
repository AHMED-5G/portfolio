import { I18n } from "i18n-js";
import { Languages } from "../types";
import { en, ar } from "./localizations";
import { theme } from "../constants/myColors";

import * as Localization from "expo-localization";
const i18n = new I18n();
export const loadLocale = (lang: Languages) => {
  i18n.translations = { en, ar };
  i18n.defaultLocale = Localization.locale.split("-")[0] == "ar" ? "ar" : "en";
  i18n.locale = Localization.locale.split("-")[0] == "ar" ? "ar" : "en";
  theme.localizationFlexDirection = "row";
  theme.localizationRtl = Localization.isRTL;
};

export { i18n };
