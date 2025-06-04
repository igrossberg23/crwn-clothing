import type { ShopCategory } from '../../types';
import { CATEGORY_ACTION_TYPES } from './category.types';

interface CategoriesReducerType {
	categories: ShopCategory[];
}

export const CATEGORIES_INITIAL_STATE = {
	categories: [],
};

export const categoriesReducer = (
	state: CategoriesReducerType = CATEGORIES_INITIAL_STATE,
	action: { type: string; payload: any } = { type: '', payload: null }
) => {
	const { type, payload } = action;

	switch (type) {
		case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
			return { ...state, categories: payload };
		default:
			return state;
	}
};
