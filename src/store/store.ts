import { CART_STORAGE_KEY } from '@/constants';
import LocalStorageUtils from '@/utils/localStorageUtils';
import { configureStore } from '@reduxjs/toolkit';

import { cartReducer, CartState } from './cartSlice';

const preloadedCart = LocalStorageUtils.getItem<CartState>(CART_STORAGE_KEY, {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
});

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: { cart: preloadedCart },
});

store.subscribe(() => {
  const state = store.getState();
  LocalStorageUtils.setItem(CART_STORAGE_KEY, state.cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
