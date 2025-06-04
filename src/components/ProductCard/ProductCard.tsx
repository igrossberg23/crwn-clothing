import type { Product } from '../../types';
import Button from '../Button/Button';
import {
	Footer,
	Name,
	Price,
	ProductCardContainer,
} from './ProductCard.styles';
import { addItemToCart } from '../../store/cart/cart.reducer';
import { useDispatch } from 'react-redux';

export interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();

	const addProductToCart = () => {
		dispatch(addItemToCart(product));
	};

	return (
		<ProductCardContainer>
			<img
				src={imageUrl}
				alt={name}
			/>
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				buttonType='inverted'
				onClick={addProductToCart}>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
