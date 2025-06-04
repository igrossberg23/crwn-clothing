import { createSelector } from 'reselect';
import type { CartItem } from '../../types';

const selectCartReducer = (state: any) => state.cart;

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(total: number, cartItem: CartItem) => total + cartItem.quantity,
		0
	)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(total: number, cartItem: CartItem) =>
			total + cartItem.quantity * cartItem.price,
		0
	)
);
