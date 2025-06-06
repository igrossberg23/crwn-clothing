import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../ProductCard/ProductCard';
import { CategoryTitle, CategoryContainer } from './Category.styles';
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from '../../store/categories/category.selector';
import { useMemo } from 'react';
import Spinner from '../Spinner/Spinner';
import type { CategoryItem } from '../../store/categories/category.types';

type CategoryRouteParams = {
	category: string;
};

const Category = () => {
	const { category } = useParams<
		keyof CategoryRouteParams
	>() as CategoryRouteParams;

	const categoryMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	const products = useMemo(() => {
		return categoryMap[category];
	}, [category, categoryMap]);

	return (
		<>
			<CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products.map((product: CategoryItem) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</CategoryContainer>
			)}
		</>
	);
};

export default Category;
