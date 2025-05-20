import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import CrwnLogo from '../../assets/crown.svg';
import './Navigation.scss';
import { CartContext } from '../../contexts/CartContext';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<div className='navigation'>
				<Link
					className='logo-container'
					to='/'>
					<img
						src={CrwnLogo}
						alt='Crwn Logo'
					/>
				</Link>

				<div className='nav-links-container'>
					<Link
						className='nav-link'
						to='/shop'>
						Shop
					</Link>
					{currentUser ? (
						<span
							className='nav-link'
							onClick={signOutUser}>
							Sign Out
						</span>
					) : (
						<Link
							className='nav-link'
							to='/auth'>
							Sign In
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
