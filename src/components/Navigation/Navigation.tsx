import { Outlet } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import CrwnLogo from '../../assets/crown.svg';
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from './Navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	return (
		<>
			<NavigationContainer>
				<LogoContainer to='/'>
					<img
						src={CrwnLogo}
						alt='Crwn Logo'
					/>
				</LogoContainer>

				<NavLinks>
					<NavLink to='/shop'>Shop</NavLink>
					{currentUser ? (
						<NavLink
							as='span'
							to=''
							onClick={signOutUser}>
							Sign Out
						</NavLink>
					) : (
						<NavLink to='/auth'>Sign In</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
