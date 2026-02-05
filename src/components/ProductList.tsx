'use client';

import { useStoreData } from '@/hooks/useStoreData';
import { ProductItem } from './ProductItem';

export function ProductList() {
  const { products, isLoading } = useStoreData();

  if (isLoading) {
    return (
      <div>
        <p>Loading products...</p>
      </div>
    );
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
