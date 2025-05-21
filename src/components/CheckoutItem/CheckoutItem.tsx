import { useContext } from 'react';
import type { CartItem } from '../../types';
import { CartContext } from '../../contexts/CartContext';
import {
	Arrow,
	CheckoutItemContainer,
	ImageContainer,
	Quantity,
	RemoveButton,
	TextBlock,
	Value,
} from './CheckoutItem.styles';

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
		<CheckoutItemContainer>
			<ImageContainer>
				<img
					src={imageUrl}
					alt={name}
				/>
			</ImageContainer>
			<TextBlock>{name}</TextBlock>
			<Quantity>
				<Arrow onClick={handleDecrementQty}>&#10094;</Arrow>
				<Value className='value'>{quantity}</Value>
				<Arrow onClick={handleIncrementQty}>&#10095;</Arrow>
			</Quantity>
			<TextBlock>${price}</TextBlock>
			<RemoveButton onClick={handleRemove}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
