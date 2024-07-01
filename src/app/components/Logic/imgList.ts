import { Product } from '../../api/interface';

export function renderProductImages(product: Product) {
    const imageElements = product.images.map((image, _) => `
        <div class="product-images">
            <img src="${image}" alt="${product.title}">
        </div>
    `).join('');

    return `
        <div class="product-image-column">
            ${imageElements}
        </div>
        <div class="product-image-overview">
            <img src="${product.images[0]}" alt="${product.title}" id="mainImage">
        </div>
    `;
}
