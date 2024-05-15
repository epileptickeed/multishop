import { createSlice } from '@reduxjs/toolkit';

export type PickedItem = {
  currentSubHeaderItem: number;
};

const initialState: PickedItem = {
  currentSubHeaderItem: 0,
};

export const PickedItemSlice = createSlice({
  name: 'visible',
  initialState,
  reducers: {
    setCurrentSubHeader: (state, action) => {
      state.currentSubHeaderItem = action.payload;
    },
  },
});

export const { setCurrentSubHeader } = PickedItemSlice.actions;
export default PickedItemSlice.reducer;
