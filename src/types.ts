export interface Category {
	id: number;
	title: string;
	imageUrl: string;
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
