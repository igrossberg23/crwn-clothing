import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from './CartDropdown.styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import type { CartItem as CartItemType } from '../../types';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckout = () => {
		navigate('/checkout');
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item: CartItemType) => (
						<CartItem
							key={item.id}
							cartItem={item}
						/>
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckout}>Checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
