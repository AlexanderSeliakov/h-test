export interface Product {
  id: string;
  name: string;
  price: number; // price in cents to avoid floating point issues
  image?: string;
}
export interface CartItem {
  product: Product;
  quantity: number;
}
