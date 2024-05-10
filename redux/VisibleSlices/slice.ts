import { createSlice } from "@reduxjs/toolkit";

export type VisibleSliceProps = {
  catalogueItemsIndex: number;
};

const initialState: VisibleSliceProps = {
  catalogueItemsIndex: 0,
};

export const visibleSlice = createSlice({
  name: "visible",
  initialState,
  reducers: {
    setCatalogueItems: (state, action) => {
      state.catalogueItemsIndex = action.payload;
    },
  },
});

export const { setCatalogueItems } = visibleSlice.actions;
export default visibleSlice.reducer;
