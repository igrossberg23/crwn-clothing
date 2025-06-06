import { CartItemContainer, ItemDetails, Name } from './CartItem.styles';
import type { CartItem as CartItemType } from '../../store/cart/cart.types';

export type CartItemProps = {
	cartItem: CartItemType;
};

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
