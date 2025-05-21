import type { CartItem } from '../../types';

interface CartReducerType {
	cartItems: CartItem[];
	isCartOpen: boolean;
	cartCount: number;
	cartTotal: number;
}

export const cartReducer = (
	state: CartReducerType,
	action: { type: string; payload: any }
) => {
	const { type, payload } = action;

	switch (type) {
		case 'TOGGLE_IS_CART_OPEN':
			return {
				...state,
				isCartOpen: !state.isCartOpen,
			};
		case 'SET_CART_ITEMS':
			return {
				...state,
				...payload,
			};
		default:
			throw new Error(`Unhandled type ${type} in cartReducer`);
	}
};

export const CART_ACTION_TYPES = {
	TOGGLE_IS_CART_OPEN: 'TOGGLE_IS_CART_OPEN',
	SET_CART_ITEMS: 'SET_CART_ITEMS',
};

export const INIT_CART_REDUCER = {
	cartItems: [],
	isCartOpen: false,
	cartCount: 0,
	cartTotal: 0,
};
