import { Outlet } from 'react-router-dom';

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
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(signOutStart());
	};

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
							onClick={handleSignOut}>
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
