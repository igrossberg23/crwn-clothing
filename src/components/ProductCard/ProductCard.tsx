import { useContext } from 'react';
import type { Product } from '../../types';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/Cart/CartContext';
import {
	Footer,
	Name,
	Price,
	ProductCardContainer,
} from './ProductCard.styles';

export interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => {
		addItemToCart(product);
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
