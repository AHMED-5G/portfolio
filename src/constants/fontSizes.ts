import { fontRatio } from "./Layout";

const fontSizes = {
  small: 12,
  medium: 16,
  large: 18,
  s18: 18,
};

export type FontSizeEnum = keyof typeof fontSizes;

export const fontSizeEntries = Object.entries(fontSizes).map(([key, value]) => [
  key as FontSizeEnum,
  fontRatio(value),
]);
