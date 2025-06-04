import type { CartItem } from '../../types';
import { CART_ACTION_TYPES } from './cart.types';

interface CartReducerType {
	cartItems: CartItem[];
	isCartOpen: boolean;
}

export const CART_INITIAL_STATE = {
	cartItems: [],
	isCartOpen: false,
};

export const cartReducer = (
	state: CartReducerType = CART_INITIAL_STATE,
	action: { type: string; payload: any } = { type: '', payload: null }
) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: !state.isCartOpen,
			};
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				cartItems: payload,
			};
		default:
			return state;
	}
};
