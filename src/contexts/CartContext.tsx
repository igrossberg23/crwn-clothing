import { createContext, useMemo, useState } from 'react';
import type { CartItem, Product } from '../types';

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
	isCartOpen: false,
	setIsCartOpen: () => {
		throw new Error('setIsCartOpen called outside CartProvider');
	},
	cartItems: [],
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
	cartCount: 0,
	cartTotal: 0,
};

interface CartContextType {
	isCartOpen: boolean;
	setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
	cartItems: CartItem[];
	addItemToCart: (productToAdd: Product) => void;
	removeItemFromCart: (itemToRemove: CartItem) => void;
	clearItemFromCart: (itemToClear: CartItem) => void;
	cartCount: number;
	cartTotal: number;
}

export const CartContext = createContext<CartContextType>(defaultValue);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const addItemToCart = (productToAdd: Product) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (itemToRemove: CartItem) => {
		setCartItems(removeCartItem(cartItems, itemToRemove));
	};

	const clearItemFromCart = (itemToClear: CartItem) => {
		setCartItems(removeCartItem(cartItems, { ...itemToClear, quantity: 1 }));
	};

	const cartCount = useMemo(
		() => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0),
		[cartItems]
	);

	const cartTotal = useMemo(
		() =>
			cartItems.reduce(
				(total, cartItem) => total + cartItem.quantity * cartItem.price,
				0
			),
		[cartItems]
	);

	return (
		<CartContext.Provider
			value={{
				isCartOpen,
				setIsCartOpen,
				cartItems,
				addItemToCart,
				cartCount,
				removeItemFromCart,
				clearItemFromCart,
				cartTotal,
			}}>
			{children}
		</CartContext.Provider>
	);
};
