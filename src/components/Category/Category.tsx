import { useParams } from 'react-router-dom';
import './Category.scss';
import { useContext, useMemo } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../ProductCard/ProductCard';

const Category = () => {
	const { category } = useParams();
	const { categoryMap } = useContext(CategoriesContext);

	const products = useMemo(() => {
		if (!category || !(category in categoryMap)) return [];

		return categoryMap[category];
	}, [category, categoryMap]);

	return (
		<>
			<h2 className='category-title'>{category?.toUpperCase()}</h2>
			<div className='category-container'>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</>
	);
};

export default Category;
