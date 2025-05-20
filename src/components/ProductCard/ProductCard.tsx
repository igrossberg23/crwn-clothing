import { useContext } from 'react';
import type { Product } from '../../types';
import Button from '../Button/Button';
import './ProductCard.scss';
import { CartContext } from '../../contexts/CartContext';

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
		<div className='product-card-container'>
			<img
				src={imageUrl}
				alt={name}
			/>
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button
				buttonType='inverted'
				onClick={addProductToCart}>
				Add to cart
			</Button>
		</div>
	);
};

export default ProductCard;
