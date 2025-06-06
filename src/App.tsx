import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './routes/home/Home';
import Navigation from './components/Navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

import { checkUserSession } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from './store/categories/category.action';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
		dispatch(fetchCategoriesStart());
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
