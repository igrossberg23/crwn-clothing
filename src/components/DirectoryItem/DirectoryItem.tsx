import { useNavigate } from 'react-router-dom';
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
	const { title, imageUrl, route } = category;
	const navigate = useNavigate();

	const clickHandler = () => {
		navigate(route);
	};

	return (
		<DirectoryItemContainer onClick={clickHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p> Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
