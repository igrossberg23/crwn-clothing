import type { CartItem, Product } from '../../types';
import { CART_ACTION_TYPES } from './cart.types';

/**
 * Utility function for adding a product to the existing cart items array
 * @param cartItems
 * @param productToAdd
 * @returns
 */
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

/**
 * Utility function for removing a product from the existing cart items array
 * @param cartItems
 * @param itemToRemove
 * @returns
 */
const removeCartItem = (cartItems: CartItem[], itemToRemove: CartItem) => {
	if (itemToRemove.quantity < 2)
		return cartItems.filter((item) => item.id !== itemToRemove.id);

	return cartItems.map((item) =>
		item.id === itemToRemove.id
			? { ...item, quantity: item.quantity - 1 }
			: item
	);
};

export const toggleIsCartOpen = () => {
	return {
		type: CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN,
	};
};

export const addItemToCart = (cartItems: CartItem[], productToAdd: Product) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return {
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: newCartItems,
	};
};

export const removeItemFromCart = (
	cartItems: CartItem[],
	itemToRemove: CartItem
) => {
	const newCartItems = removeCartItem(cartItems, itemToRemove);
	return {
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: newCartItems,
	};
};

export const clearItemFromCart = (
	cartItems: CartItem[],
	itemToClear: CartItem
) => {
	const newCartItems = removeCartItem(cartItems, {
		...itemToClear,
		quantity: 1,
	});
	return {
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: newCartItems,
	};
};
