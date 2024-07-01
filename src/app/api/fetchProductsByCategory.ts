import { Product } from './interface';

const API_BASE_URL = 'https://dummyjson.com/products';

export async function fetchProductsByCategory(categoryName: string): Promise<Product[]> {
    const res = await fetch(`${API_BASE_URL}/category/${categoryName}`);
    if (!res.ok) {
        throw new Error('Failed to fetch products by category');
    }
    return res.json().then(data => data.products);
}