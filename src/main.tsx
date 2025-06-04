import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

import './index.scss';

import App from './App.tsx';
import { stripePromise } from './utils/stripe/stripe.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<Elements stripe={stripePromise}>
						<App />
					</Elements>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>
);
