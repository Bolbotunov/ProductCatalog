import { Provider } from 'react-redux';

import { store } from '@/store/store';
import type { Product } from '@/types';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProductCard from './index';

jest.mock('react-hot-toast', () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

const product: Product = {
  id: 1,
  title: 'Test Product',
  price: 10,
  image: 'img.jpg',
  description: 'test',
  category: 'test',
  isInStock: true,
};

const renderWithStore = (ui: React.ReactNode) =>
  render(<Provider store={store}>{ui}</Provider>);
describe('ProductCard', () => {
  test('renders product info', () => {
    renderWithStore(<ProductCard product={product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
  });
  test('adds product to cart when clicking the button', async () => {
    const user = userEvent.setup();
    renderWithStore(<ProductCard product={product} />);
    const button = screen.getByRole('button', { name: /add to cart/i });
    await user.click(button);
    const state = store.getState().cart;
    expect(state.items).toHaveLength(1);
  });
});
