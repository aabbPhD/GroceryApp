import React from "react";
import useProductsStore from "../../store/products.store";
import type { ProductType, CategoryType } from "../../types/types";
import { useParams } from "react-router-dom";
import PathToPage from "../PathToPage";
import { categoriesEnToRu } from "../../utils/pathMap";
import Category from "../Category";




function CategoryPage() {
    const params = useParams<{ category: keyof typeof categoriesEnToRu }>();

    const products = useProductsStore(state => state.products);
    const newProducts = useProductsStore(state => state.newProducts);
    const popularProducts = useProductsStore(state => state.popularProducts);

    const [chosenCategory, setChosenCategory] = React.useState<CategoryType | undefined>();

    React.useEffect(() => {
        if (products && newProducts && popularProducts && params?.category) {
            const allCategoryProducts = getAllCategoryProducts();
            setChosenCategory({
                name: categoriesEnToRu[params.category],
                products: allCategoryProducts,
            })
        }
    }, [products, newProducts, popularProducts, params.category])

    function getAllCategoryProducts(): ProductType[] {
        if (!params?.category || !(params.category in categoriesEnToRu)) return [];
        if (params.category === 'new') return newProducts;
        else if (params.category === 'popular') return popularProducts;
        else {
            const paramCategory = params.category;
            return products.filter(item => item.category === categoriesEnToRu[paramCategory]);
        }
    }

    return (
        products ?
        <>
            {params.category
                ? <PathToPage  productCategory={categoriesEnToRu[params.category]} />
                : <PathToPage />}
            {chosenCategory && 
            <div className="category-page">
                <Category 
                    category={chosenCategory}
                />
            </div>}
        </> :
        <h2>loading...</h2>
    )
}

//export default React.memo(CategoryPage);
export default CategoryPage