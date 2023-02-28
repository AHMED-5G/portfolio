import { I18n } from "i18n-js";
import { en, ar } from "./localizations";

const i18n = new I18n();
export const loadLocale = async (lang: "ar" | "en") => {
  // const i18n = new I18n({
  //   en: en,
  //   ar: ar,
  // });
  i18n.translations = { en, ar };
  // i18n.locale = state.data.language;

  i18n.defaultLocale = lang;
  i18n.locale = lang;
};

export { i18n };
