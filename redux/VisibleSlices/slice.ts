import { createSlice } from "@reduxjs/toolkit";

export type VisibleSliceProps = {
  catalogueItems: number;
};

const initialState: VisibleSliceProps = {
  catalogueItems: 0,
};

export const visibleSlice = createSlice({
  name: "visible",
  initialState,
  reducers: {
    setCatalogueItems: (state, action) => {
      state.catalogueItems = action.payload;
    },
  },
});

export const { setCatalogueItems } = visibleSlice.actions;
export default visibleSlice.reducer;
