import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
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
import { CartContext } from '../../contexts/CartContext';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

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
