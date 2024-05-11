import { createSlice } from "@reduxjs/toolkit";

export type InputTypeProps = {
  search: string;
  searchHistory: string[];
};

const initialState: InputTypeProps = {
  search: "",
  searchHistory: [],
};

const formSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.search = action.payload;
    },
    setSearchHistory: (state, action) => {
      state.searchHistory.push(action.payload);
    },
    nullHistory: (state, action) => {
      state.searchHistory = [];
    },
  },
});

export const { setSearchValue, setSearchHistory, nullHistory } =
  formSlice.actions;
export default formSlice.reducer;
