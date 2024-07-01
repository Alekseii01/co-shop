import { Product } from '../../../api/interface';
import { renderProducts } from '../categoriesData';

export const filterProducts = (
    products: Product[], 
    brands: string[], 
    minPrice: number, 
    maxPrice: number
): Product[] => {
    return products.filter(product => {
        const meetsBrandCriteria = brands.length === 0 || brands.includes(product.brand);
        const meetsPriceCriteria = product.price >= minPrice && product.price <= maxPrice;
        return meetsBrandCriteria && meetsPriceCriteria;
    });
}

export const setupFilterForm = (products: Product[]): void => {
    const filterForm = document.getElementById('board-filters') as HTMLFormElement;

    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const selectedBrands = Array.from(filterForm.querySelectorAll('input[name="brand"]:checked')).map(input => (input as HTMLInputElement).value);
        const minPrice = parseFloat((filterForm.querySelector('input[name="min-price"]') as HTMLInputElement).value) || 0;
        const maxPrice = parseFloat((filterForm.querySelector('input[name="max-price"]') as HTMLInputElement).value) || 3000;

        const filteredProducts = filterProducts(products, selectedBrands, minPrice, maxPrice);
        const productsListElement = document.querySelector('.products-list');
        if (productsListElement) {
            productsListElement.innerHTML = renderProducts(filteredProducts);
        }

        if (filteredProducts.length == 0) {
            const productsListElement = document.querySelector('.products-list');
            if (productsListElement) {
                productsListElement.innerHTML = '<h2 style="text-align: center;">No products found</h2>';
            }
        }
    });

    const resetButton = filterForm.querySelector('#filter-reset');
    if (resetButton) {
        resetButton.addEventListener('click', (event) => {
            event.preventDefault();
            filterForm.reset();
            const productsListElement = document.querySelector('.products-list');
            if (productsListElement) {
                productsListElement.innerHTML = renderProducts(products);
            }
        });
    }
}
