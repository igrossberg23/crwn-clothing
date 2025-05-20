import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './routes/home/Home';
import Navigation from './components/Navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

function App() {
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
