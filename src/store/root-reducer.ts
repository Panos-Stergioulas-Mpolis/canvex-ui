import { combineReducers } from "@reduxjs/toolkit";
import GlobalReducer from "./global/global-slice";

export const rootReducer = combineReducers({
  global: GlobalReducer,
});
