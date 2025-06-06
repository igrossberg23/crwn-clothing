import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import {
	CategoryPreviewContainer,
	Preview,
	Title,
} from './CategoryPreview.styles';
import type { CategoryItem } from '../../store/categories/category.types';

export type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
	return (
		<CategoryPreviewContainer>
			<Title>
				<Link to={title}>{title.toUpperCase()}</Link>
			</Title>
			<Preview>
				{products.slice(0, 4).map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
