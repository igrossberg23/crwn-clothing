import type { CartItem as CartItemType } from '../../types';
import { CartItemContainer, ItemDetails, Name } from './CartItem.styles';

export interface CartItemProps {
	cartItem: CartItemType;
}

const CartItem = ({ cartItem }: CartItemProps) => {
	const { name, quantity, imageUrl, price } = cartItem;
	return (
		<CartItemContainer>
			<img
				src={imageUrl}
				alt={name}
			/>
			<ItemDetails>
				<Name>{name}</Name>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
