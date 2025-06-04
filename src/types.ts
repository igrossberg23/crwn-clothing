import type { User } from 'firebase/auth';

export type NullableUser = User | null;

export interface Category {
	id: number;
	title: string;
	imageUrl: string;
	route: string;
}

export interface userAuthDetails {
	displayName?: string;
}

export interface Product {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}

export interface CartItem extends Product {
	quantity: number;
}

export interface ShopCategory {
	title: string;
	items: Product[];
}

export type CategoriesMap = Record<string, Product[]>;
