export enum CATEGORY_ACTION_TYPES {
	FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
	FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
	FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED',
}

export type CategoryItem = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
};

export type Category = {
	title: string;
	imageUrl: string;
	items: CategoryItem[];
};

export type DirectoryCategory = {
	id: number;
	title: string;
	imageUrl: string;
	route: string;
};

export type CategoryMap = {
	[key: string]: CategoryItem[];
};
