'use client';

import { useState, useEffect } from 'react';

import productsData from '@/config/products.json';
import { Product } from '@/types';

export function useStoreData() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async fetch (could be replaced with real API call)
    const loadData = async () => {
      setIsLoading(true);

      // Fake delay to show loading state (remove in production)
      await new Promise((resolve) => setTimeout(resolve, 500));

      setProducts(productsData as Product[]);
      setIsLoading(false);
    };

    loadData();
  }, []);

  return { products, isLoading };
}
