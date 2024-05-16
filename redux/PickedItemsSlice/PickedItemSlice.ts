import { createSlice } from '@reduxjs/toolkit';

export type PickedItem = {
  currentSubHeaderItem: number;
  currentMainHeader: number;
  currentSecondHeader: number;
};

const initialState: PickedItem = {
  currentSubHeaderItem: 0,
  currentMainHeader: 0,
  currentSecondHeader: 0,
};

export const PickedItemSlice = createSlice({
  name: 'visible',
  initialState,
  reducers: {
    setCurrentSubHeader: (state, action) => {
      state.currentSubHeaderItem = action.payload;
    },
    setCurrentMainHeader: (state, action) => {
      state.currentMainHeader = action.payload;
    },
    setSecondHeader: (state, action) => {
      state.currentSecondHeader = action.payload;
    },
  },
});

export const { setCurrentSubHeader, setCurrentMainHeader, setSecondHeader } =
  PickedItemSlice.actions;
export default PickedItemSlice.reducer;
