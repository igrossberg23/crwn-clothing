import type { Category } from '../../types';
import CategoryItem from '../DirectoryItem/DirectoryItem';
import './Directory.scss';

export interface DirectoryProps {
	categories: Category[];
}

const Directory = ({ categories }: DirectoryProps) => {
	return (
		<div className='directory-container'>
			{categories.map((category) => (
				<CategoryItem
					key={category.id}
					category={category}
				/>
			))}
		</div>
	);
};

export default Directory;
