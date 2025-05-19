import { Outlet, Link } from 'react-router-dom';
import './Navigation.scss';
import CrwnLogo from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const onSignOut = async () => {
		await signOutUser();
		setCurrentUser(null);
	};
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
							onClick={onSignOut}>
							Sign Out
						</span>
					) : (
						<Link
							className='nav-link'
							to='/auth'>
							Sign In
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
