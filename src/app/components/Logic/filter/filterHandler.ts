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

export const sortProducts = (
    products: Product[], 
    sortOrder: 'ascending' | 'descending'
): Product[] => {
    return products.sort((a, b) => {
        if (sortOrder === 'ascending') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
}

export const getUniqueCategories = (products: Product[]): string[] => {
    const brand = products.map(product => product.brand);
    return Array.from(new Set(brand));
}

const populateFilterOptions = (categories: string[]): void => {
    const filterOptionsContainer = document.querySelector('.filters_sort_options');
    if (filterOptionsContainer) {
        categories.forEach(category => {
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = category;
            input.name = 'brand';
            input.value = category;

            const label = document.createElement('label');
            label.className = 'filters_options_types';
            label.htmlFor = category;
            label.textContent = category;

            filterOptionsContainer.appendChild(input);
            filterOptionsContainer.appendChild(label);
        });
    }
}

export const setupFilterForm = (products: Product[]): void => {
    const filterForm = document.getElementById('board-filters') as HTMLFormElement;

    const uniqueCategories = getUniqueCategories(products);
    populateFilterOptions(uniqueCategories);

    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const selectedBrands = Array.from(filterForm.querySelectorAll('input[name="brand"]:checked')).map(input => (input as HTMLInputElement).value);
        const minPrice = parseFloat((filterForm.querySelector('input[name="min-price"]') as HTMLInputElement).value) || 0;
        const maxPrice = parseFloat((filterForm.querySelector('input[name="max-price"]') as HTMLInputElement).value) || 3000;
        
        const sortOrder = (filterForm.querySelector('input[name="sort"]:checked') as HTMLInputElement)?.value || 'ascending';

        let filteredProducts = filterProducts(products, selectedBrands, minPrice, maxPrice);
        filteredProducts = sortProducts(filteredProducts, sortOrder as 'ascending' | 'descending');
        
        const productsListElement = document.querySelector('.products-list');
        if (productsListElement) {
            if (filteredProducts.length === 0) {
                productsListElement.innerHTML = '<h2 style="text-align: center;">No products found</h2>';
            } else {
                productsListElement.innerHTML = renderProducts(filteredProducts);
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