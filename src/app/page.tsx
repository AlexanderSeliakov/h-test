import { ProductList } from '@/components/ProductList';
import { Cart } from '@/components/Cart';

import styles from './page.module.css';

export default function Home() {
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
