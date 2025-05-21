import { createContext, useReducer } from 'react';
import type { CartItem, Product } from '../../types';
import {
	CART_ACTION_TYPES,
	INIT_CART_REDUCER,
	cartReducer,
} from './cartReducer';
import { createAction } from '../../utils/reducer/reducer.utils';

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

const defaultValue = {
	cartItems: [],
	isCartOpen: false,
	cartCount: 0,
	cartTotal: 0,
	toggleIsCartOpen: () => {
		throw new Error('toggleIsCartOpen called outside CartProvider');
	},
	addItemToCart: (productToAdd: Product) => {
		productToAdd;
		throw new Error('addItemToCart called outside CartProvider');
	},
	removeItemFromCart: (itemToRemove: CartItem) => {
		itemToRemove;
		throw new Error('removeItem called outside CartProvider');
	},
	clearItemFromCart: (itemToClear: CartItem) => {
		itemToClear;
		throw new Error('clearItemFromCart called outside CartProvider');
	},
};

interface CartContextType {
	isCartOpen: boolean;
	cartItems: CartItem[];
	toggleIsCartOpen: () => void;
	addItemToCart: (productToAdd: Product) => void;
	removeItemFromCart: (itemToRemove: CartItem) => void;
	clearItemFromCart: (itemToClear: CartItem) => void;
	cartCount: number;
	cartTotal: number;
}

export const CartContext = createContext<CartContextType>(defaultValue);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
		useReducer(cartReducer, INIT_CART_REDUCER);

	const toggleIsCartOpen = () => {
		dispatch(createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN, null));
	};

	const updateCartItemsReducer = (newCartItems: CartItem[]) => {
		const newCount = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		const newTotal = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				cartItems: newCartItems,
				cartCount: newCount,
				cartTotal: newTotal,
			})
		);
	};

	const addItemToCart = (productToAdd: Product) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (itemToRemove: CartItem) => {
		const newCartItems = removeCartItem(cartItems, itemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const clearItemFromCart = (itemToClear: CartItem) => {
		const newCartItems = removeCartItem(cartItems, {
			...itemToClear,
			quantity: 1,
		});
		updateCartItemsReducer(newCartItems);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				cartCount,
				cartTotal,
				isCartOpen,
				toggleIsCartOpen,
				addItemToCart,
				removeItemFromCart,
				clearItemFromCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};
