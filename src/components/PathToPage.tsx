import { Link } from "react-router-dom"
import { categoriesRuToEn } from "../utils/pathMap"

type PathToPageProps = {
    productCategory?: string,
    productName?: string,
}

export default function PathToPage({productCategory, productName}: PathToPageProps) {

    function handleLinkClick(e: React.MouseEvent, url: string) {
        if (!url) e.preventDefault();
    }

    return (
        <div className="path-to-page">
            <Link className="nav-link active" to="/">Главная</Link>
            <span className="nav-link-arrow">{'>'}</span>
            <Link className="nav-link" to="#" onClick={() => handleLinkClick}>Категории</Link>
            {productCategory && !productName &&
            <>
                <span className="nav-link-arrow">{'>'}</span>
                <Link className="nav-link visited" to='#' onClick={() => handleLinkClick}>{productCategory}</Link>
            </>}
            {productCategory && productName && 
            <> 
                <span className="nav-link-arrow">{'>'}</span>
                <Link className="nav-link active" to={"/" + categoriesRuToEn[productCategory]}>{productCategory}</Link>
                <span className="nav-link-arrow">{'>'}</span>
                <Link className="nav-link visited" to='#' onClick={() => handleLinkClick}>{productName}</Link>
            </>}
        </div>
    )
}