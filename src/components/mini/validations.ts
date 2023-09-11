export const validateSpecialCharacters = (text: string) => {
  const format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

  if (format.test(text)) {
    return "special characters not allowed";
  }
};

export function validateIntNumber(text: string) {
  if (!/^[0-9]+$/.test(text)) {
    return "Enter numeric characters only (Allowed input:0-9)";
  }
}

export function validateHasWhiteSpace(text: string) {
  if (/\s/g.test(text)) {
    return "White space not allowed";
  } else {
    return "";
  }
}

export function validateLongTextLength(text: string, length: number) {
  if (text.length > length) {
    return "Too long";
  }
}

export function validateShortTextLength(
  text: string,
  length: number,
  message = "Too short",
) {
  if (text.length < length) {
    return message;
  } else {
    return "";
  }
}

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

export const isEnglishWithSpecialChars = (
  text: string,
  message = "English letters only",
): string => {
  if (
    !text.match(/^[A-Za-z\s\d~`!@#$%^&*()\-_=+[\]{}|\\;:'",<.>/?]+$/)
  ) {
    return message;
  } else {
    return "";
  }
};

export const validateTextMatch = (
  text1: string,
  text2: string,
  name?: string,
) => {
  if (text1 !== text2) {
    return name + " " + "not match";
  }
};
