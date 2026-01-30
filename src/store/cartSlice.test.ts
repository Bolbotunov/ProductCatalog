import type { AnyAction } from '@reduxjs/toolkit';

import type { CartState } from './cartSlice';
import {
  addItem,
  cartReducer,
  clearCart,
  decrease,
  increase,
  removeItem,
} from './cartSlice';

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const product = {
  id: 1,
  title: 'Test Product',
  price: 10,
  image: 'img.jpg',
  description: 'test',
  category: 'test',
};

const reduce = (state: CartState, action: AnyAction) =>
  cartReducer(state, action);
const add = (state = initialState) => reduce(state, addItem(product));

describe('cartSlice', () => {
  test('adds a new product', () => {
    const state = add();
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(1);
    expect(state.totalAmount).toBe(10);
  });

  test('increments quantity if product already exists', () => {
    const s2 = add(add());
    expect(s2.items[0].quantity).toBe(2);
    expect(s2.totalAmount).toBe(20);
  });

  test('increase action works', () => {
    const s2 = reduce(add(), increase(1));
    expect(s2.items[0].quantity).toBe(2);
  });

  test('decrease removes item when quantity becomes zero', () => {
    const s2 = reduce(add(), decrease(1));
    expect(s2.items).toHaveLength(0);
  });

  test('removeItem deletes product', () => {
    const s2 = reduce(add(), removeItem(1));
    expect(s2.items).toHaveLength(0);
  });

  test('clearCart resets state', () => {
    const s2 = reduce(add(), clearCart());
    expect(s2).toEqual(initialState);
  });
});
