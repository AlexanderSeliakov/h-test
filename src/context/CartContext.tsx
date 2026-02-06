'use client';

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { Product, CartItem } from '@/types';

interface CartContextValue {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
  getQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.product.id === product.id);
      if (existing) {
        return prev.map((ci) =>
          ci.product.id === product.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((ci) => ci.product.id !== productId));
  }, []);

  const decrementQuantity = useCallback((productId: string) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.product.id === productId);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter((ci) => ci.product.id !== productId);
      }
      return prev.map((ci) =>
        ci.product.id === productId ? { ...ci, quantity: ci.quantity - 1 } : ci
      );
    });
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const isInCart = useCallback(
    (productId: string) => cart.some((ci) => ci.product.id === productId),
    [cart]
  );

  const getQuantity = useCallback(
    (productId: string) => cart.find((ci) => ci.product.id === productId)?.quantity ?? 0,
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      decrementQuantity,
      clearCart,
      isInCart,
      getQuantity,
    }),
    [cart, addToCart, removeFromCart, decrementQuantity, clearCart, isInCart, getQuantity]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
