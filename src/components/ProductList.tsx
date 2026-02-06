'use client';

import { useStoreData } from '@/hooks/useStoreData';
import { ProductItem } from './ProductItem';

export function ProductList() {
  const { products, isLoading } = useStoreData();

  if (isLoading) {
    return <p>Loading products...</p>;
  }
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
