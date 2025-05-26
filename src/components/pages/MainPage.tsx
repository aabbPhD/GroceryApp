import useProductsStore from "../../store/products.store";
import type { CategoryType } from "../../types/types";
import Category from "../Category";


const TOP_PRODUCTS_AMOUNT = 4;

export default function MainPage() {
    const newProducts = useProductsStore(state => state.newProducts);
    const popularProducts = useProductsStore(state => state.popularProducts);

    const popularCategory: CategoryType = {
        name: 'Популярное',
        products: popularProducts,
    }

    const newCategory: CategoryType = {
        name: 'Новинки',
        products: newProducts,
    }

    return (
        <div className="main-page">
            <Category 
                category={{...newCategory, maxAmountRendered: TOP_PRODUCTS_AMOUNT}}
                showMoreProducts={true}
            />
            <Category 
                category={{...popularCategory, maxAmountRendered: TOP_PRODUCTS_AMOUNT}}
                showMoreProducts={true}
            />
        </div>
    )
}