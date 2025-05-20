import { createContext, useState } from 'react';

const defaultValue = {
	isCartOpen: false,
	setIsCartOpen: () => {},
};

interface CartContextType {
	isCartOpen: boolean;
	setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextType>(defaultValue);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	return (
		<CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
			{children}
		</CartContext.Provider>
	);
};
