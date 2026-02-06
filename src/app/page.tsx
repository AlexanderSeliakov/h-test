'use client';

import { ProductList } from '@/components/ProductList';
import { Cart } from '@/components/Cart';
import { CartProvider } from '@/context/CartContext';

import styles from './page.module.css';

function StoreContent() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.productsSection}>
          <ProductList />
        </section>

        <aside className={styles.sidebar}>
          <Cart />
        </aside>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <StoreContent />
    </CartProvider>
  );
}
