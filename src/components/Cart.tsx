'use client';

import { useCart } from '@/context/CartContext';
import { calculateTotal, formatPrice } from '@/utils/utils';

export function Cart() {
  const { cart, clearCart } = useCart();

  const total = calculateTotal(cart);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.product.id}>
                {item.product.name} - {formatPrice(item.product.price)}
                <span> x {item.quantity}</span>
              </li>
            ))}
          </ul>
          <p>
            <strong>Total: {formatPrice(total)}</strong>
          </p>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
