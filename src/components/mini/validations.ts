import { Validator } from "../../utils";
/**
 * @deprecated
 */
export const validateHasSpecialCharacters = (text: string) => {
  const format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

  if (format.test(text)) {
    return "special characters not allowed";
  }
};
/**
 * @deprecated
 */
export const validateIntNumber: Validator<string> = (
  text: string,
  message = "Enter numeric characters only (Allowed input: 0-9)",
) => {
  const isNumeric = /^[0-9]+$/.test(text);
  return isNumeric ? null : message;
};
/**
 * @deprecated
 */
export const validateHasWhiteSpace: Validator<string> = (
  text: string,
  message = "White space not allowed",
) => {
  if (/\s/g.test(text)) {
    return message;
  } else {
    return null;
  }
};
/**
 * @deprecated
 */
export const validateLongTextLength: Validator<string, [number, string?]> = (
  text: string,
  length: number,
  message = "Too long",
) => {
  return text.length > length ? message : null;
};
/**
 * @deprecated
 */
export function validateShortTextLength(
  text: string,
  length: number,
  message = "Too short",
) {
  if (text.length < length) {
    return message;
  }
  return null;
}
/**
 * @deprecated
 */
export const validateEmail = (
  email: string,
  message = "Invalid email",
): string => {
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  ) {
    return message;
  } else {
    return "";
  }
};
/**
 * @deprecated
 */
export const isEnglishWithSpecialChars = (
  text: string,
  message = "English letters only",
): string => {
  if (!text.match(/^[A-Za-z\s\d~`!@#$%^&*()\-_=+[\]{}|\\;:'",<.>/?]+$/)) {
    return message;
  } else {
    return "";
  }
};
/**
 * @deprecated
 */
export const validateTextMatch = (
  text1: string,
  text2: string,
  name?: string,
) => {
  if (text1 !== text2) {
    return name + " " + "not match";
  }
};
