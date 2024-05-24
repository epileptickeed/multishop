import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booleanSlice from './BooleanSlices/Slice';
import visibleSlice from './VisibleSlices/slice';
import itemsSlice from './fetch/fetch';
import formSlice from './FormSlice/slice';
import filterSlice from './newsFilterSlices/NewsFilterSlice';
import pickedItemSlice from './PickedItemsSlice/PickedItemSlice';
import sortSlice from './SortSlice/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  PickedItems: pickedItemSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    booleans: booleanSlice,
    visible: visibleSlice,
    items: itemsSlice,
    search: formSlice,
    filter: filterSlice,
    PickedItems: persistedReducer,
    sort: sortSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
