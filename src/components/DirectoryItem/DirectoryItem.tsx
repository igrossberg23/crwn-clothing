import { useNavigate } from 'react-router-dom';
import {
	DirectoryItemContainer,
	Body,
	BackgroundImage,
} from './DirectoryItem.styles';
import type { DirectoryCategory } from '../../store/categories/category.types';

export interface DirectoryItemProps {
	category: DirectoryCategory;
}

const DirectoryItem = ({ category }: DirectoryItemProps) => {
	const { title, imageUrl, route } = category;
	const navigate = useNavigate();

	const clickHandler = () => {
		navigate(route);
	};

	return (
		<DirectoryItemContainer onClick={clickHandler}>
			<BackgroundImage imageurl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p> Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
