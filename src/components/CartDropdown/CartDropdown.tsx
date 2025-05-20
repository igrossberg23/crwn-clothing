import { useContext } from 'react';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckout = () => {
		navigate('/checkout');
	};

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						cartItem={item}
					/>
				))}
			</div>
			<Button onClick={goToCheckout}>Checkout</Button>
		</div>
	);
};

export default CartDropdown;
