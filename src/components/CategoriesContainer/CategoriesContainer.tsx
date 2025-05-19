import type { Category } from '../../types';
import CategoryItem from '../CategoryItem/CategoryItem';
import './CategoriesContainer.scss';

export interface CategoriesContainerProps {
	categories: Category[];
}

const CategoriesContainer = ({ categories }: CategoriesContainerProps) => {
	return (
		<div className='categories-container'>
			{categories.map((category) => (
				<CategoryItem
					key={category.id}
					category={category}
				/>
			))}
		</div>
	);
};

export default CategoriesContainer;
