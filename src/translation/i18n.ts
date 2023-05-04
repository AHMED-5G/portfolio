import { I18n } from "i18n-js";
import { Languages } from "../types";
import { en, ar } from "./localizations";
import { LocalizationDirection, theme } from "../constants/myColors";

const i18n = new I18n();
export const loadLocale = (lang: Languages) => {
  i18n.translations = { en, ar };
  i18n.defaultLocale = lang == Languages.Arabic ? "ar" : "en";
  i18n.locale = lang == Languages.Arabic ? "ar" : "en";
  theme.localizationDirection = lang == "ar" ? "rtl" : "ltr";
  theme.localizationFlexDirection = lang == "ar" ? "row-reverse" : "row";
  theme.localizationRtl = lang == "ar" ? true : false;
};

export { i18n };
