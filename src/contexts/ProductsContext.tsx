import { createContext, useState } from 'react';
import type { Product } from '../types';
import PRODUCTS from '../shop-data.json';

const defaultValue = {
	products: [] as Product[],
	setProducts: () => {
		throw new Error('setProducts was called outside of ProductsProvider');
	},
};

interface ProductsContextType {
	products: Product[];
	setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductsContext = createContext<ProductsContextType>(defaultValue);

export const ProductsProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [products, setProducts] = useState<Product[]>(PRODUCTS);

	return (
		<ProductsContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductsContext.Provider>
	);
};
