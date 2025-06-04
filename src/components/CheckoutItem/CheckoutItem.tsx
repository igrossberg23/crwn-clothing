import type { CartItem } from '../../types';
import {
	Arrow,
	CheckoutItemContainer,
	ImageContainer,
	Quantity,
	RemoveButton,
	TextBlock,
	Value,
} from './CheckoutItem.styles';
import {
	addItemToCart,
	clearItemFromCart,
	removeItemFromCart,
} from '../../store/cart/cart.reducer';
import { useDispatch } from 'react-redux';

export interface CheckoutItemProps {
	cartItem: CartItem;
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
	const { name, quantity, price, imageUrl } = cartItem;
	const dispatch = useDispatch();

	const handleDecrementQty = () => dispatch(removeItemFromCart(cartItem));
	const handleIncrementQty = () => dispatch(addItemToCart(cartItem));
	const handleRemove = () => dispatch(clearItemFromCart(cartItem));

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
