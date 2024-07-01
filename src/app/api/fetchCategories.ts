import { Category } from './interface';

const API_BASE_URL = 'https://dummyjson.com/products';

export async function fetchCategories(): Promise<Category[]> {
    const res = await fetch(`${API_BASE_URL}/categories`);
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    return res.json();
}