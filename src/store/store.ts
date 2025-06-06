import {
	compose,
	legacy_createStore,
	applyMiddleware,
	type Middleware,
} from 'redux';
import logger from 'redux-logger';
import {
	persistStore,
	persistReducer,
	type PersistConfig,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root.reducer';
// import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const nodeEnv = import.meta.env.VITE_NODE_ENV;

type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
	nodeEnv === 'development' && logger,
	sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer =
	(nodeEnv === 'development' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = legacy_createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
