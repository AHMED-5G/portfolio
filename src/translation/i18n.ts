import { I18n } from "i18n-js";

import { en, ar } from "./localizations";
import { theme } from "../constants/theme";
import * as Localization from "expo-localization";

const i18n = new I18n();
export const loadLocale = () => {
  // console.log(Localization.getLocales()[0].textDirection=='rtl');
  i18n.translations = { en, ar };
  i18n.defaultLocale = Localization.locale.split("-")[0] == "ar" ? "ar" : "en";
  i18n.locale = Localization.locale.split("-")[0] == "ar" ? "ar" : "en";

  theme.localizationRtl = Localization.getLocales()[0].textDirection == "rtl";
};

export { i18n };
