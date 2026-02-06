'use client';

import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/utils';

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  const { addToCart, decrementQuantity, isInCart, getQuantity } = useCart();

  const inCart = isInCart(product.id);
  const quantity = getQuantity(product.id);

  return (
    <li className="product-item">
      <h3>{product.name}</h3>
      <p>Price: {formatPrice(product.price)}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart-button">
        Add to Cart
      </button>
      <button
        onClick={() => decrementQuantity(product.id)}
        className="remove-from-cart-button"
        disabled={!inCart}
      >
        Remove from Cart {inCart && `(${quantity})`}
      </button>
    </li>
  );
}
