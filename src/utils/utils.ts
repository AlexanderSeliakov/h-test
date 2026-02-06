import { CartItem } from '@/types';

/** Formats price in cents to a display string in euros (e.g. 30 → "0.30€") */
export function formatPrice(cents: number): string {
  return (cents / 100).toFixed(2) + '€';
}

/** Calculates the total price of cart items in cents (without offers). */
export function calculateTotal(cart: CartItem[]): number {
  return cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
}
