import type { Middleware, UnknownAction } from 'redux';
import type { RootState, store } from '../store';

export const loggerMiddleware: Middleware<
	UnknownAction,
	RootState,
	typeof store.dispatch
> = (store) => (next) => (action) => {
	if (
		typeof action !== 'object' ||
		action === null ||
		!('type' in action) ||
		!('payload' in action)
	)
		return next(action);

	console.log('type', action.type);
	console.log('payload', action.payload);
	console.log('currentState', store.getState());

	const result = next(action);

	console.log('next state', store.getState());

	return result;
};
