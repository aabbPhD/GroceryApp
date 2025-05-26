import CategoryIcon from './svg-icons/categoryicon';
import CrossIcon from './svg-icons/crossicon';
import BasketIcon from './svg-icons/basketicon';
import LoginIcon from './svg-icons/loginicon';
import ProductsInput from './ProductsInput';
import useCategoryStore from '../store/category.store';



function ToggleCategoriesButton() {
    const categoryOn = useCategoryStore(state => state.categoryOn);
    const toggleCategory = useCategoryStore(state => state.toggleCategory);

    return(
        <div className='header-categories' onClick={toggleCategory}>
                {categoryOn ? <CrossIcon /> : <CategoryIcon />}
                <span>Каталог</span>
            </div>
    )
}


function Header() {
    return (
        <div className='header'>
            <div className='header-content'>
                <span className='logo'>Наш магазин</span>
                <ToggleCategoriesButton />
                <ProductsInput />
                <div className='header-actions'>
                    <BasketIcon />
                    <span>Корзина</span>
                </div>
                <div className='header-actions'>
                    <LoginIcon />
                    <span>Войти</span>
                </div>
            </div> 
        </div>
    )
}

export default Header