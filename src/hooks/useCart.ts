import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import {
  addItem,
  clearCart,
  decrease,
  increase,
  removeItem,
} from '@/store/cartSlice';
import { RootState } from '@/store/store';
import { Product } from '@/types';

export function useCart() {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity,
  );
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return {
    items,
    totalQuantity,
    totalAmount,
    addItem: (product: Product) => {
      dispatch(addItem(product));
      toast.success(`${product.title} added to cart`);
    },
    removeItem: (id: number) => {
      dispatch(removeItem(id));
      toast.success(`Item removed`);
    },
    increase: (id: number) => dispatch(increase(id)),
    decrease: (id: number) => dispatch(decrease(id)),
    clearCart: () => {
      dispatch(clearCart());
      toast.success('Cart cleared');
    },
  };
}
