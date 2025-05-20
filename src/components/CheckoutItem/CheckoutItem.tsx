import { useContext } from 'react';
import type { CartItem } from '../../types';
import './CheckoutItem.scss';
import { CartContext } from '../../contexts/CartContext';

export interface CheckoutItemProps {
	cartItem: CartItem;
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
	const { name, quantity, price, imageUrl } = cartItem;
	const { removeItemFromCart, addItemToCart, clearItemFromCart } =
		useContext(CartContext);

	const handleDecrementQty = () => removeItemFromCart(cartItem);
	const handleIncrementQty = () => addItemToCart(cartItem);
	const handleRemove = () => clearItemFromCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img
					src={imageUrl}
					alt={name}
				/>
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<span
					className='arrow'
					onClick={handleDecrementQty}>
					&#10094;
				</span>
				<span className='value'>{quantity}</span>
				<span
					className='arrow'
					onClick={handleIncrementQty}>
					&#10095;
				</span>
			</span>
			<span className='price'>${price}</span>
			<div
				className='remove-button'
				onClick={handleRemove}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
