import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { GlobalSliceInitialState } from "src/types/index";

const initialState: GlobalSliceInitialState = {
  isSideBarOpen: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSideBarOpen(state, action: PayloadAction<boolean>) {
      state.isSideBarOpen = action.payload;
    },
  },
});

export const { setIsSideBarOpen } = globalSlice.actions;

export default globalSlice.reducer;
