import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import ProductCard from '../ProductCard/ProductCard';
import './CategoryPreview.scss';

export interface CategoryPreviewProps {
	title: string;
	products: Product[];
}

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
	return (
		<div className='category-preview-container'>
			<h2>
				<Link to={title}>{title.toUpperCase()}</Link>
			</h2>
			<div className='preview'>
				{products.slice(0, 4).map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</div>
	);
};

export default CategoryPreview;
