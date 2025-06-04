import { CartIconContainer, ItemCount } from './CartIcon.styles';
import ShoppingBagIcon from '../../assets/shopping-bag.svg';

import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector';
import { toggleIsCartOpen } from '../../store/cart/cart.reducer';

export interface CartIconProps {}

const CartIcon = ({}: CartIconProps) => {
	const cartCount = useSelector(selectCartCount);
	const dispatch = useDispatch();

	const handleCartIconClick = () => {
		dispatch(toggleIsCartOpen());
	};

	return (
		<CartIconContainer onClick={handleCartIconClick}>
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
