import { useParams } from 'react-router-dom';

import { useContext, useMemo } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../ProductCard/ProductCard';
import { CategoryTitle, CategoryContainer } from './Category.styles';

const Category = () => {
	const { category } = useParams();
	const { categoryMap } = useContext(CategoriesContext);

	const products = useMemo(() => {
		if (!category || !(category in categoryMap)) return [];

		return categoryMap[category];
	}, [category, categoryMap]);

	return (
		<>
			<CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
			<CategoryContainer>
				{products.map((product) => (
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
