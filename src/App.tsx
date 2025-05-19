import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/authentication/Authentication';

const Shop = () => {
	return (
		<div>
			<p>I am the shop</p>
		</div>
	);
};

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
						path='sign-in'
						element={<SignIn />}
					/>
					<Route
						path='shop'
						element={<Shop />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
