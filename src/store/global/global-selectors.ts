import type { RootState } from "../store";

export const selectIsSideBarOpen = (state: RootState) => {
  return state.global.isSideBarOpen;
};
