import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';
import Category from '../../components/Category/Category';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.reducer';
import type { ShopCategory } from '../../types';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categories = (await getCategoriesAndDocuments()) as ShopCategory[];
			dispatch(setCategories(categories));
		};
		getCategoriesMap();
	}, []);

	return (
		<Routes>
			<Route
				index
				element={<CategoriesPreview />}
			/>
			<Route
				path=':category'
				element={<Category />}
			/>
		</Routes>
	);
};

export default Shop;
