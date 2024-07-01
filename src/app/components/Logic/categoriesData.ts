import { Product } from '../../api/interface';
import { generateStars } from './stars';

export const renderProducts = (products: Product[]): string => {
    return products.map(product => `
        <div class="product-card">
            <a href="/product/${product.id}" data-navigo>
                <div class="product-image"><img src="${product.thumbnail}" alt="${product.title}"></div>
                <h3>${product.title}</h3>
            </a>
            <div class="rating">
                ${generateStars(product.rating).starsHtml}
                <span>${generateStars(product.rating).roundedRating}/</span><span class="gray">5</span>
            </div>
            <div class="price">
                <h3>$${Math.round(product.price * (1 - product.discountPercentage / 100))}</h3>
                <h3 class="discount gray">$${Math.round(product.price)}</h3>
                <h3 class="discount-percentage">${Math.round(product.discountPercentage)}%</h3>
            </div>
        </div>
    `).join('');
}

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
