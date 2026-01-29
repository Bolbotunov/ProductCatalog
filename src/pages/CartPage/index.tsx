import CartProductCard from '@/components/CartProductCard';
import { useCart } from '@/hooks/useCart';

function CartPage() {
  const { items, totalAmount } = useCart();

  if (items.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      {items.map((item) => (
        <CartProductCard key={item.id} item={item} />
      ))}

      <h2>Total: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
}

export default CartPage;
