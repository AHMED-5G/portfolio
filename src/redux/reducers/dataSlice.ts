import { createSlice, Slice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Languages } from "../../types";

const initialState = {
  error: undefined,
  loading: false,
  language: Languages.English,
};

export const dataSlice: Slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    SET_LANGUAGE: (state, action: PayloadAction<Languages>) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_LANGUAGE } = dataSlice.actions;

export default dataSlice.reducer;
