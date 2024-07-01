import { loadHeader } from '../components/shared/header';
import { loadFooter } from '../components/shared/footer';
import { loadHero } from '../components/shared/hero';
import { loadFormСomponent } from '../components/shared/formСomponent';
import { fetchCategories } from '../api/fetchCategories';
import { Category } from '../api/interface';
export async function loadHomePage(): Promise<string> {
    const categories: Category[] = await fetchCategories();

    const categoryLinks = categories.map(category => `
        <div class="category">
            <a href="/category/${category.slug}" data-navigo>${category.name}</a>
        </div>
    `).join('');    

    return `
        ${loadHeader()}
        ${loadHero()}
        <section class="categories">
            <h1>Categories</h1>
            <div class="category-template scroller">
                ${categoryLinks}
            </div>
        </section>
        ${loadFormСomponent()}
        ${loadFooter()}
    `;
}
