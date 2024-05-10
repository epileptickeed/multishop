import { createSlice } from "@reduxjs/toolkit";

interface BooleanSliceProps {
  isCatalogueActive: boolean;
}

const initialState: BooleanSliceProps = {
  isCatalogueActive: false,
};

export const booleanSlice = createSlice({
  name: "boolean",
  initialState,
  reducers: {
    setIsCatalogueActive: (state, action) => {
      state.isCatalogueActive = action.payload;
    },
  },
});

export const { setIsCatalogueActive } = booleanSlice.actions;
export default booleanSlice.reducer;
