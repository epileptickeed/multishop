import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ITEMS_API } from './ITEMS_API';
import axios from 'axios';
import { Catalogue } from '../../src/components/Navbar/Catalogue/types';

export type Products = {
  id: string;
  image: string;
  title: string;
  price: number;
  isFavorite: boolean;
  isAdded: boolean;
  rating: number;
  rating_votes: number;
  in_stock: number;
  profitable: boolean;
  reliability: string;
  catalogueName: string;
};

export type ItemsTypeProps = {
  shopItems: Catalogue[];
  // shopItemsJSON: Catalogue[]; //<-- fix 'any[]'
  status: string;
  searchValue: string;

  cartItems: Products[];

  favoritedItems: Products[];

  currentProductsOnPage: Products[];
};

const initialState: ItemsTypeProps = {
  shopItems: [],
  // shopItemsJSON: items,
  status: 'loading',
  searchValue: '',
  cartItems: [],

  favoritedItems: [],
  currentProductsOnPage: [],
};

export const fetchShopItems = createAsyncThunk('shopItems/fetchItems', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${ITEMS_API}/`);
    return response.data;
  } catch (err) {
    console.error(err);
    return thunkAPI.rejectWithValue(err);
  }
});

export const itemsSlice = createSlice({
  name: 'shopItems',
  initialState,
  reducers: {
    setToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    setToFavorite: (state, action) => {
      state.favoritedItems.push(action.payload);
    },
    setCurrentPageItems: (state, action) => {
      state.currentProductsOnPage.push(action.payload);
    },
    setItems: (state, action) => {
      state.shopItems = action.payload;
    },
    // setJSONItems: (state, action) => {
    //   state.shopItemsJSON = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchShopItems.pending, (state) => {
        state.status = 'loading';
        state.shopItems = [];
      })
      .addCase(fetchShopItems.fulfilled, (state, action) => {
        state.shopItems = action.payload;
        state.status = 'success';
      })
      .addCase(fetchShopItems.rejected, (state) => {
        state.status = 'error';
        state.shopItems = [];
      });
  },
});

export const { setToCart, setCurrentPageItems, setToFavorite, setItems /*setJSONItems*/ } =
  itemsSlice.actions;
export default itemsSlice.reducer;
