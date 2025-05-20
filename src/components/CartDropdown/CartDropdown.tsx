import Button from '../Button/Button';
import './CartDropdown.scss';

const CartDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'></div>
			<Button>Go to Checkout</Button>
		</div>
	);
};

export default CartDropdown;
