import { CartIconContainer, ItemCount } from './CartIcon.styles';
import ShoppingBagIcon from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/Cart/CartContext';
import { useContext } from 'react';

export interface CartIconProps {}

const CartIcon = ({}: CartIconProps) => {
	const { toggleIsCartOpen, cartCount } = useContext(CartContext);

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
