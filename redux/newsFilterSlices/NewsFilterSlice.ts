import { createSlice } from '@reduxjs/toolkit';

type NewsButtons = {
  title: string;
  filter: string;
};

export type NewsFilterSlice = {
  currentFilter: string;
  newsButtons: NewsButtons[];
};

const initialState: NewsFilterSlice = {
  newsButtons: [
    { title: 'Все', filter: '' },
    { title: 'Новости', filter: 'news' },
    { title: 'Блоги', filter: 'blogs' },
    { title: 'Обзоры', filter: 'reviews' },
  ],
  currentFilter: '',
};

const newsSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setCurrentFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
  },
});

export const { setCurrentFilter } = newsSlice.actions;
export default newsSlice.reducer;
