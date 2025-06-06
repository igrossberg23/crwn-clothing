import type { UnknownAction } from 'redux';
import { type CartItem } from './cart.types';
import { setCartItems, toggleIsCartOpen } from './cart.action';

export type CartState = {
	readonly cartItems: CartItem[];
	readonly isCartOpen: boolean;
};

export const CART_INITIAL_STATE: CartState = {
	cartItems: [],
	isCartOpen: false,
};

export const cartReducer = (
	state = CART_INITIAL_STATE,
	action: UnknownAction
) => {
	if (toggleIsCartOpen.match(action)) {
		return {
			...state,
			isCartOpen: !state.isCartOpen,
		};
	}

	if (setCartItems.match(action)) {
		return {
			...state,
			cartItems: action.payload,
		};
	}

	return state;
};
