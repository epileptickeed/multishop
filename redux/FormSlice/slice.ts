import { createSlice } from "@reduxjs/toolkit";

type SearchHistory = {
  id: string;
  title: string;
};

export type InputTypeProps = {
  search: string;
  searchHistory: SearchHistory[];
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
      state.searchHistory.push({
        id: crypto.randomUUID(),
        title: action.payload,
      });
      if (state.searchHistory.length > 5) {
        state.searchHistory.shift();
      }
    },
    deleteSearch: (state, action) => {
      state.searchHistory = state.searchHistory.filter(
        (item) => item.id !== action.payload
      );
    },
    nullHistory: (state) => {
      state.searchHistory.length = 0;
    },
  },
});

export const { setSearchValue, setSearchHistory, nullHistory, deleteSearch } =
  formSlice.actions;
export default formSlice.reducer;
