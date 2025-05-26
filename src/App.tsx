import './reset.css'
import './App.scss'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useProductsStore from './store/products.store';
import type { CartItemType } from './types/types';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import ProductPage from './components/pages/ProductPage';
import CategoryPage from './components/pages/CategoryPage';




function App() {
	const fetchProducts = useProductsStore(state => state.fetchProducts);
	//const [cart, setCart] = React.useState<CartItemType[]>([]);	

	React.useEffect(() => {
		fetchProducts();
	}, [])

	return (
		<BrowserRouter>
			<Routes >
				<Route element={ <Layout />}>
					<Route 
						path="/" 
						element={<MainPage />} 
					/>
					<Route 
						path="/:category" 
						element={<CategoryPage />} 
					/>
					<Route 
						path="/:category/:id" 
						element={<ProductPage />} 
					/>
				</Route>	
			</Routes>
		</BrowserRouter>
	)
}

export default App
