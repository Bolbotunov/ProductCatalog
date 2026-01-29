import type { Product } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image?: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const findItemIndex = (items: CartItem[], id: number) =>
  items.findIndex((item) => item.id === id);

const calculateTotals = (state: CartState) => {
  state.totalQuantity = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  state.totalAmount = state.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const { id, title, price, image } = action.payload;
      const index = findItemIndex(state.items, id);

      if (index === -1) {
        state.items.push({
          id,
          title,
          price,
          image,
          quantity: 1,
        });
      } else {
        state.items[index].quantity += 1;
      }

      calculateTotals(state);
    },

    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      calculateTotals(state);
    },

    increase(state, action: PayloadAction<number>) {
      const index = findItemIndex(state.items, action.payload);
      if (index !== -1) {
        state.items[index].quantity += 1;
        calculateTotals(state);
      }
    },

    decrease(state, action: PayloadAction<number>) {
      const index = findItemIndex(state.items, action.payload);
      if (index !== -1) {
        const item = state.items[index];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
        calculateTotals(state);
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, removeItem, increase, decrease, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
