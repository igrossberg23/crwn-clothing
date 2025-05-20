import './CartIcon.scss';
import ShoppingBagIcon from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

export interface CartIconProps {}

const CartIcon = ({}: CartIconProps) => {
	const { setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen((prev) => !prev);
	return (
		<div
			className='cart-icon-container'
			onClick={toggleIsCartOpen}>
			<img
				className='shopping-icon'
				src={ShoppingBagIcon}
				alt='Shopping bag icon'
			/>
			<span className='item-count'>24</span>
		</div>
	);
};

export default CartIcon;
