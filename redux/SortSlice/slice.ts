import { createSlice } from '@reduxjs/toolkit';

export type sortType = {
  sortId: number;
};

const initialState: sortType = {
  sortId: 0,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortId: (state, action) => {
      state.sortId = action.payload;
    },
  },
});

export const { setSortId } = sortSlice.actions;
export default sortSlice.reducer;
