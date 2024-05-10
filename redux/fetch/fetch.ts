import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITEMS_API } from "./ITEMS_API";
import axios from "axios";
import { Catalogue } from "../../src/components/Navbar/Catalogue/types";

export type SneakersTypeProps = {
  shopItems: Catalogue[];
  status: string;
  searchValue: string;
  // favoriteSneakers: SneakersType[];
  // addedSneakers: SneakersType[];
};

const initialState: SneakersTypeProps = {
  shopItems: [],
  status: "loading",
  searchValue: "",
  // favoriteSneakers: [],
  // addedSneakers: [],
};

// First, create the thunk
export const fetchShopItems = createAsyncThunk(
  "shopItems/fetchItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${ITEMS_API}/`);
      return response.data;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// Then, handle actions in your reducers:
export const itemsSlice = createSlice({
  name: "shopItems",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopItems.pending, (state) => {
        state.status = "loading";
        state.shopItems = [];
      })
      .addCase(fetchShopItems.fulfilled, (state, action) => {
        state.shopItems = action.payload;
        state.status = "success";
      })
      .addCase(fetchShopItems.rejected, (state) => {
        state.status = "error";
        state.shopItems = [];
      });
  },
});

export default itemsSlice.reducer;
