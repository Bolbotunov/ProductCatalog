import { Link } from 'react-router-dom';

import { useCart } from '@/hooks/useCart';

export function CartIcon() {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-icon">
      🛒
      {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
    </Link>
  );
}
