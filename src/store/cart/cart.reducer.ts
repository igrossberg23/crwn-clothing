import type { CartItem, Product } from '../../types';
import { createSlice } from '@reduxjs/toolkit';

const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
	let updatedItems;

	const existingItem = cartItems.find((item) => item.id === productToAdd.id);

	if (existingItem) {
		// increment quantity of existing CartItem
		updatedItems = cartItems.map((item) => {
			if (item.id === productToAdd.id)
				return { ...item, quantity: item.quantity + 1 };
			else return item;
		});
	} else {
		// create new CartItem from Product and push to cartItems
		updatedItems = cartItems.concat([{ ...productToAdd, quantity: 1 }]);
	}

	return updatedItems;
};

const removeCartItem = (cartItems: CartItem[], itemToRemove: CartItem) => {
	if (itemToRemove.quantity < 2)
		return cartItems.filter((item) => item.id !== itemToRemove.id);

	return cartItems.map((item) =>
		item.id === itemToRemove.id
			? { ...item, quantity: item.quantity - 1 }
			: item
	);
};

export const CART_INITIAL_STATE: {
	cartItems: CartItem[];
	isCartOpen: boolean;
} = {
	cartItems: [],
	isCartOpen: false,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: CART_INITIAL_STATE,
	reducers: {
		addItemToCart: (state, action) => {
			state.cartItems = addCartItem(state.cartItems, action.payload);
		},
		removeItemFromCart: (state, action) => {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
		},
		clearItemFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload.id
			);
		},
		toggleIsCartOpen: (state) => {
			state.isCartOpen = !state.isCartOpen;
		},
	},
});

export const {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
	toggleIsCartOpen,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
