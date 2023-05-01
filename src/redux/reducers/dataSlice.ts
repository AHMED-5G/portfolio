import { createSlice, Slice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  InitialStateInterface,
  Languages,
  ReadingThemesCombo,
} from "../../types";

const initialState: InitialStateInterface = {
  error: undefined,
  loading: false,
  language: Languages.English,
  settings: {
    savedReadingTheme: {
      fontColor: "#000000",
      backGroundColor: "#FFFFFF",
      fontSize: 18,
    },
  },
  itemsInCart: [],
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
      action: PayloadAction<ReadingThemesCombo>
    ) => {
      state.settings.savedReadingTheme = action.payload;
    },
    SET_CART: (
      state = initialState,
      action: PayloadAction<InitialStateInterface["itemsInCart"]>
    ) => {
      state.itemsInCart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_CART, SET_LANGUAGE, SET_READING_THEME } =
  dataSlice.actions;

export default dataSlice.reducer;
