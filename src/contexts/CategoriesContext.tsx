import { createContext, useEffect, useState } from 'react';
import type { Product } from '../types';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

const defaultValue = {
	categoryMap: {},
};

type CategoryMap = Record<string, Product[]>;

interface CategoriesContextType {
	categoryMap: CategoryMap;
}

export const CategoriesContext =
	createContext<CategoriesContextType>(defaultValue);

export const CategoriesProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [categoryMap, setCategoryMap] = useState<CategoryMap>({});
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoryMap(categoryMap);
		};
		getCategoriesMap();
	}, []);

	return (
		<CategoriesContext.Provider value={{ categoryMap }}>
			{children}
		</CategoriesContext.Provider>
	);
};
