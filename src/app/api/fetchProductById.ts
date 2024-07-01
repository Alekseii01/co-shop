import { Product } from './interface';

const API_BASE_URL = 'https://dummyjson.com/products';

export async function fetchProductById(productId: string): Promise<Product> {
    const res = await fetch(`${API_BASE_URL}/${productId}`);
    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    return res.json();
}
