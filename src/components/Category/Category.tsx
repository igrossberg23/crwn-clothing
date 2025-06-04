import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../ProductCard/ProductCard';
import { CategoryTitle, CategoryContainer } from './Category.styles';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useMemo } from 'react';
import type { Product } from '../../types';

const Category = () => {
	const { category } = useParams();
	const categoryMap = useSelector(selectCategoriesMap);

	const products = useMemo(() => {
		if (!category || !(category in categoryMap)) return [];

		return categoryMap[category];
	}, [category, categoryMap]);

	return (
		<>
			<CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
			<CategoryContainer>
				{products.map((product: Product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</CategoryContainer>
		</>
	);
};

export default Category;
