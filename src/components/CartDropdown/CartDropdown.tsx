import { useContext } from 'react';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from './CartDropdown.styles';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckout = () => {
		navigate('/checkout');
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => (
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
