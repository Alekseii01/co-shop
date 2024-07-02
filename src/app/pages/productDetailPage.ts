import { loadHeader } from '../components/shared/header';
import { loadFooter } from '../components/shared/footer';
import { loadFormСomponent } from '../components/shared/formСomponent';
import { fetchProductById } from '../api/fetchProductById';
import { generateStars } from '../components/Logic/stars';
import { Product } from '../api/interface';
import { initializeQuantity } from '../components/Logic/quantity'; 
import { renderProductImages } from '../components/Logic/imgList';

export async function loadProductDetailPage(productId: string): Promise<string> {
    const product: Product = await fetchProductById(productId);
    const { starsHtml, roundedRating } = generateStars(product.rating);
    initializeQuantity();
    renderProductImages(product);

    return `
        ${loadHeader()}
        <section>
            <div class="route-line"><span class="line"></span></div>
            <nav class="breadcrumbs">
                <a class="gray" href="/" data-navigo>Home</a> <span class="gray nav-margin"> > </span>  
                <a class="gray" href="/category/${product.category}" data-navigo>${product.category}</a> <span class="gray nav-margin"> > </span> 
                ${product.title}
            </nav>
            <div class="product-detail">
               ${renderProductImages(product)}
               <div class="product-info">
                    <div class="product-header">
                    <h1 class="product-h1">${product.title}</h1>
                      <div class="rating">
                        ${starsHtml}
                        <span>${roundedRating}/5</span>
                      </div>
                        <div class="price">
                            <h3>$${Math.round(product.price * (1 - product.discountPercentage / 100))}</h3>
                            <h3 class="discount gray>">$${Math.round(product.price)}</h3>
                            <h3 class="discount-percentage">${Math.round(product.discountPercentage)}%</h3>
                        </div>
                      </div>
                      <div class="product-description">
                        <p>${product.description}</p>
                      </div>
                      <div class="route-line description"><span class="line"></span></div>
                      <div class="item-description">
                        <h3 class="gray">Brand</h2>
                        <h2 class="product-h2">${product.brand}</h3>
                      </div>
                        <div class="route-line description"><span class="line"></span></div>
                      <div class="item-description">
                        <h3 class="gray">In Stock</h3>
                        <h2 class="product-h2">${product.stock} items in stock</h2>
                     </div>
                        <div class="route-line description"><span class="line"></span></div>
                      <div class="product-buttons">
                        <div class="quantity">
                          <i class="fa-solid fa-minus"></i>
                          <h3>1</h3>
                          <i class="fa-solid fa-plus"></i>
                        </div>
                        <button class="button cart">Add to cart</button>  
               </div>
            </div>
        </section>
        ${loadFormСomponent()}
        ${loadFooter()}
    `;
}