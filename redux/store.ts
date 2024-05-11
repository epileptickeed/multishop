import { configureStore } from "@reduxjs/toolkit";
import booleanSlice from "./BooleanSlices/Slice";
import visibleSlice from "./VisibleSlices/slice";
import itemsSlice from "./fetch/fetch";
import formSlice from "./FormSlice/slice";

export const store = configureStore({
  reducer: {
    booleans: booleanSlice,
    visible: visibleSlice,
    items: itemsSlice,
    search: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
