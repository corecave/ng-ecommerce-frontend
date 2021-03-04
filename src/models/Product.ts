import { Category } from './Category';
import { Image } from './Image';

export interface Product {
  id: number;
  images?: Image[];
  name: string;
  slug: string;
  excerpt?: string;
  description?: string;
  stock: number;
  stock_limit: number;
  price: number;
  sale_price: number;
  category?: Category;
  sale_start_date?: Date;
  sale_end_date?: Date;
  created_at?: Date;
  updated_at?: Date;
}
