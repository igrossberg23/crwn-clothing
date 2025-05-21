import type { Category } from '../../types';
import {
	DirectoryItemContainer,
	Body,
	BackgroundImage,
} from './DirectoryItem.styles';

export interface DirectoryItemProps {
	category: Category;
}

const DirectoryItem = ({ category }: DirectoryItemProps) => {
	const { title, imageUrl } = category;

	return (
		<DirectoryItemContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p> Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
