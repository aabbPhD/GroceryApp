import { create } from 'zustand';
import type { ProductType } from '../types/types';

const POPULAR_PRODUCTS_AMOUNT = 20;

type ProductsState = {
  products: ProductType[];
  newProducts: ProductType[];
  popularProducts: ProductType[];
  fetchProducts: () => Promise<void>;
  updateDerivedProducts: () => void;
}

const useProductsStore = create<ProductsState>((set, get) => ({
    products: [],
    newProducts: [],
    popularProducts: [],

    fetchProducts: async () => {
        const response = await fetch('/GroceryApp/products_db.json');
        const data = await response.json();
        if (data?.products?.length) {
            set({ products: data.products });
            const currentStore = get();
            currentStore.updateDerivedProducts();
        }
    },

    updateDerivedProducts: () => {
        const { products } = get();

        set({
            newProducts: products.filter(item => item.new === true),
            popularProducts: [...products]
                .sort((a, b) => b.sales - a.sales)
                .slice(0, POPULAR_PRODUCTS_AMOUNT)
        });
    }
}));

export default useProductsStore;
