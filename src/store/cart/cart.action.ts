import {
	withMatcher,
	type Action,
	type ActionWithPayload,
	createAction,
} from '../../utils/reducer/reducer.utils';
import type { CategoryItem } from '../categories/category.types';
import { CART_ACTION_TYPES, type CartItem } from './cart.types';
/**
 * Utility function for adding a product to the existing cart items array
 * @param cartItems
 * @param productToAdd
 * @returns
 */
const addCartItem = (
	cartItems: CartItem[],
	productToAdd: CategoryItem
): CartItem[] => {
	let updatedItems;
	if (!cartItems || !productToAdd) return [];

	const existingItem = cartItems.find((item) => item.id === productToAdd.id);

	if (existingItem) {
		// increment quantity of existing CartItem
		updatedItems = cartItems.map((item) => {
			if (item.id === productToAdd.id)
				return { ...item, quantity: item.quantity + 1 };
			else return item;
		});
	} else {
		// create new CartItem from CategoryItem and push to cartItems
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
const removeCartItem = (
	cartItems: CartItem[],
	itemToRemove: CartItem
): CartItem[] => {
	if (!cartItems || !itemToRemove) return [];

	if (itemToRemove.quantity < 2)
		return cartItems.filter((item) => item.id !== itemToRemove.id);

	return cartItems.map((item) =>
		item.id === itemToRemove.id
			? { ...item, quantity: item.quantity - 1 }
			: item
	);
};

export type ToggleIsCartOpen = Action<CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN>;

export const toggleIsCartOpen = withMatcher((): ToggleIsCartOpen => {
	return {
		type: CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN,
	};
});

export type SetCartItems = ActionWithPayload<
	CART_ACTION_TYPES.SET_CART_ITEMS,
	CartItem[]
>;

export const setCartItems = withMatcher(
	(cartItems: CartItem[]): SetCartItems =>
		createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = withMatcher(
	(cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		return setCartItems(newCartItems);
	}
);

export const removeItemFromCart = withMatcher(
	(cartItems: CartItem[], itemToRemove: CartItem): SetCartItems => {
		const newCartItems = removeCartItem(cartItems, itemToRemove);
		return setCartItems(newCartItems);
	}
);

export const clearItemFromCart = withMatcher(
	(cartItems: CartItem[], itemToClear: CartItem): SetCartItems => {
		const newCartItems = removeCartItem(cartItems, {
			...itemToClear,
			quantity: 1,
		});
		return setCartItems(newCartItems);
	}
);
