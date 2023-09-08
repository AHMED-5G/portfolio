import { createSlice, Slice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  InitialStateInterface,
  Languages,
  ReadingThemesCombo,
} from "../../types";
import { theme, UserConfigurationInterface } from "../../constants/theme";
import { Appearance } from "react-native";
import { JSONWebTokenType } from "shared-data/types";

const initialState: InitialStateInterface = {
  error: undefined,
  loading: false,
  language: Languages.English,
  settings: {
    savedReadingTheme: {
      fontColor: "#000000",
      backGroundColor: "#FFFFFF",
      fontSize: theme.fontSize.s18,
    },
    userConfiguration: {
      darkTheme: Appearance.getColorScheme() == "dark" ? true : false,
    },
  },

  jwt: undefined,
};

export const dataSlice: Slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    SET_LANGUAGE: (state = initialState, action: PayloadAction<Languages>) => {
      state.language = action.payload;
    },

    SET_READING_THEME: (
      state = initialState,
      action: PayloadAction<ReadingThemesCombo>,
    ) => {
      state.settings.savedReadingTheme = action.payload;
    },

    SET_USER_CONFIGURATIONS: (
      state = initialState,
      action: PayloadAction<UserConfigurationInterface>,
    ) => {
      state.settings.userConfiguration = action.payload;
    },

    SET_USER_JWT: (
      state = initialState,
      action: PayloadAction<JSONWebTokenType | undefined>,
    ) => {
      state.jwt = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  SET_LANGUAGE,
  SET_READING_THEME,
  SET_USER_CONFIGURATIONS,
  SET_USER_JWT,
} = dataSlice.actions;

export default dataSlice.reducer;
