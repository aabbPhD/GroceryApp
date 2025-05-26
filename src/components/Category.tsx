import type { CategoryType } from "../types/types"
import ArrowRightIcon from "./svg-icons/arrowrighticon"
import ProductItem from "./ProductCard"
import { categoriesRuToEn } from "../utils/pathMap"
import { useNavigate } from "react-router-dom"

type CategoryComponentProps = {
    category: CategoryType,
    showMoreProducts?: boolean,
}

export default function Category({category, showMoreProducts = false}: CategoryComponentProps) {
    const navigate = useNavigate();

    const renderedProducts = category.maxAmountRendered ? 
        [...category.products].slice(0, category.maxAmountRendered) :
        category.products;

    const productItems = renderedProducts.map(item => {
        return <ProductItem key={item.name} product={item}/>
    })

    function goToCategoryPage() {
        navigate(`/${categoriesRuToEn[category.name]}`);
    }

    return(
        <div className="category-subsection">
            <div className="category-subsection-header">
                <h2>{category.name}</h2>
                {showMoreProducts && <div className="category-subsection-show-more" onClick={()=> goToCategoryPage()}>
                    <p>{category.products.length} товаров</p>
                    <ArrowRightIcon />
                </div>}
            </div>
            {!showMoreProducts && <p className="category-subsection-products-amount">{category.products.length} товаров</p>}
            <div className="category-subsection-content">{productItems}</div>
        </div>
    )
}