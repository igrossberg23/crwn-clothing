import type { Category } from '../../types';
import CategoryItem from '../DirectoryItem/DirectoryItem';
import { DirectoryContainer } from './Directory.styles';

export interface DirectoryProps {
	categories: Category[];
}

const Directory = ({ categories }: DirectoryProps) => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<CategoryItem
					key={category.id}
					category={category}
				/>
			))}
		</DirectoryContainer>
	);
};

export default Directory;
