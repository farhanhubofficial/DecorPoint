// src/Store/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Api/CartSlice';
import { curtainSlice } from './Api/CurtSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [curtainSlice.reducerPath]: curtainSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(curtainSlice.middleware),
});

setupListeners(store.dispatch);
