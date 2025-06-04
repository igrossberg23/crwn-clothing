import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
// import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			{/* <PersistGate persistor={persistor}> */}
			<BrowserRouter>
				<App />
			</BrowserRouter>
			{/* </PersistGate> */}
		</Provider>
	</StrictMode>
);
