import { createSelector } from 'reselect';
import type { CartState } from './cart.reducer';
import type { RootState } from '../store';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity * cartItem.price,
		0
	)
);
