import React from 'react';
import useProductsStore from '../store/products.store';
import SearchIcon from './svg-icons/searchicon';
import CrossIcon from './svg-icons/crossicon';
import type { ProductType } from '../types/types';
import getImageURL from '../utils/image-util';
import { categoriesRuToEn } from '../utils/pathMap';
import { useNavigate } from 'react-router-dom';
import useCategoryStore from '../store/category.store';




function ProductsInput() {
    const products = useProductsStore(state => state.products);

    const [inputValue, setInputValue] = React.useState<string>('');
    const [inputProductsList, setInputProductsList] = React.useState<ProductType[]>([]);
    const [inputFocused, setInputFocused] = React.useState<boolean>(false);

    function strMatcher(sample: string): ProductType[] {
        if (!products || !sample) return [];
        return products.filter(item => item.name.toLowerCase().includes(sample.toLowerCase()));
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const value: string = e.target.value;
        setInputValue(value);
        const matchingProducts = strMatcher(value).slice(0, 5);
        setInputProductsList(matchingProducts);
    }

    function clearInput() {
        setInputValue('');
        setInputProductsList([]);
    }

    const inputProductsListItems = inputProductsList.map(item => {
        return  <ProductListItem 
                    key={item.id}
                    product={item}
                    clearInput={clearInput}
                />
    })

    return(
        <div className='input-wrapper'>
            <input 
                type='text'
                placeholder='Поиск' 
                value={inputValue}
                onChange={handleInput}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
            />
            <SearchIcon />
            {inputValue !== '' && <div onClick={clearInput}><CrossIcon /></div>}
            {(inputProductsListItems.length > 0 && inputFocused) && 
                <ul className='matching-products'>{inputProductsListItems}</ul>}
        </div>
    )
}

export default React.memo(ProductsInput)




type ProductListItemProps = {
  product: ProductType;
  clearInput: () => void;
};

const ProductListItem = ({ product, clearInput }: ProductListItemProps) => {
  const navigate = useNavigate();
  const resetChosenCategory = useCategoryStore(state => state.resetChosenCategory);

  const handleClick = () => {
    navigate(`/${categoriesRuToEn[product.category]}/${product.id}`);
    resetChosenCategory();
    clearInput();
  };

  return (
    <li onMouseDown={handleClick}>
      <img src={getImageURL(product.image)} />
      <span>{product.name}</span>
    </li>
  );
};