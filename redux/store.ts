import { configureStore } from "@reduxjs/toolkit";
import booleanSlice from "./BooleanSlices/Slice";
import visibleSlice from "./VisibleSlices/slice";

export const store = configureStore({
  reducer: {
    booleans: booleanSlice,
    visible: visibleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
