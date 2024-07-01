import { loadHeader } from '../components/shared/header';
import { loadFooter } from '../components/shared/footer';
import { loadFormСomponent } from '../components/shared/formСomponent';
import { fetchProductsByCategory } from '../api/fetchProductsByCategory';
import { renderProducts } from '../components/Logic/categoriesData';
import { setupFilterForm } from '../components/Logic/filter/filterHandler';
import { loadFilterForm } from '../components/Logic/filter/loadFilterForm';

export async function loadCategoryPage(categoryName: string): Promise<string> {
    const products = await fetchProductsByCategory(categoryName);

    const htmlContent = `
        ${loadHeader()}
        <section>
            <div class="route-line"><span class="line"></span></div>
            <nav class="breadcrumbs">
                <a class="gray" href="/" data-navigo>Home</a><span class="gray nav-margin"> > </span> ${categoryName}
            </nav>
            <div class="products-container">
                <div class="filter">
                    ${loadFilterForm()}
                </div>
                <div class="products">
                    <div class="products-header"><h2>${categoryName}</h2></div>
                    <div class="products-list scroller">
                        ${renderProducts(products)}
                    </div>
                    <div class="route-line categories"><span class="line"></span></div>
                </div>
            </div>
        </section>
        ${loadFormСomponent()}
        ${loadFooter()}
    `;

    setTimeout(() => setupFilterForm(products), 0);

    return htmlContent;
}