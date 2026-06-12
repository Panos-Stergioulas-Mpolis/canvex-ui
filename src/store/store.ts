import { useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { rootReducer } from "./root-reducer";

export const setupStore = (preloadedState?: Partial<RootState>) => {
  const str = configureStore({
    reducer: rootReducer,

    preloadedState,
  });

  setupListeners(str.dispatch);

  return str;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
