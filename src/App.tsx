import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './routes/home/Home';
import Navigation from './components/Navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';
import type { NullableUser } from './types';
import { setCurrentUser } from './store/user/user.reducer';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user: NullableUser) => {
			if (user) createUserDocumentFromAuth(user);

			const pickedUser =
				user &&
				(({ accessToken, email }) => {
					accessToken, email;
				})(user);
			dispatch(setCurrentUser(pickedUser));
		});

		return unsubscribe;
	}, []);

	return (
		<div className='app'>
			<Routes>
				<Route
					path={'/'}
					element={<Navigation />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='auth'
						element={<Authentication />}
					/>
					<Route
						path='shop/*'
						element={<Shop />}
					/>
					<Route
						path='checkout'
						element={<Checkout />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
