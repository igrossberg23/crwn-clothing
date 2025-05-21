import { CartIconContainer, ItemCount } from './CartIcon.styles';
import ShoppingBagIcon from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

export interface CartIconProps {}

const CartIcon = ({}: CartIconProps) => {
	const { setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen((prev) => !prev);

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<img
				className='shopping-icon'
				src={ShoppingBagIcon}
				alt='Shopping bag icon'
			/>
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
