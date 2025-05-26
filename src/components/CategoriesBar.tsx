import React from "react";
import { Link } from "react-router-dom"
import { categoriesRuToEn } from "../utils/pathMap"
import useCategoryStore from "../store/category.store"


export default function CategoriesBar() {
    const categoryOn = useCategoryStore(state => state.categoryOn);
    const categoriesListStyle = categoryOn ? 'categories-list' : 'categories-list collapsed';

    return (
        <div className={categoriesListStyle}>
            <div className="categories-list-header">Категории</div>
            <CategoriesListItems />
        </div>
    );
}


const CategoriesListItems = React.memo(() => {
    const chosenCategory = useCategoryStore(state => state.chosenCategory);
    const setChosenCategory = useCategoryStore(state => state.setChosenCategory); 
    const categoryKeys = Object.keys(categoriesRuToEn) as Array<keyof typeof categoriesRuToEn>;

    const handleCategoryClick = React.useCallback((index: number) => {
        setChosenCategory(index);
    }, [setChosenCategory]);

    return (
    <>
        {categoryKeys.map((item, index) => (
        <Link
            key={item}
            className={index === chosenCategory ? 'category-link chosen' : 'category-link'}
            to={`/${categoriesRuToEn[item]}`}
            onClick={() => handleCategoryClick(index)}
        >
            {item}
        </Link>
        ))}
    </>
    );
});