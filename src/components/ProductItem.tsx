import { Product } from '@/types';

interface ProductItemProps {
  product: Product;
}
export function ProductItem(props: ProductItemProps) {
  const { product } = props;

  return (
    <li className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button className="add-to-cart-button">Add to Cart</button>
      <button className="remove-from-cart-button">Remove from Cart</button>
    </li>
  );
}
