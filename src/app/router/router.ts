import Navigo, { Match } from 'navigo';
import { loadHomePage } from '../pages/homePage';
import { loadCategoryPage } from '../pages/categoryPage';
import { loadProductDetailPage } from '../pages/productDetailPage';

const router = new Navigo('/');

function render(component: Promise<string>) {
    component.then(html => {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = html;
        router.updatePageLinks();
    });
}

router
    .on('/', () => render(loadHomePage()))
    .on('/category/:categoryName', (match: Match | undefined) => {
        const categoryName = match?.data?.categoryName as string;
        render(loadCategoryPage(categoryName));
    })
    .on('/product/:productId', (match: Match | undefined) => {
        const productId = match?.data?.productId as string;
        render(loadProductDetailPage(productId));
    })
    .resolve();

export default router;