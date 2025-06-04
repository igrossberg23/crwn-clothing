import type { ShopCategory } from '../../types';
import { CATEGORY_ACTION_TYPES } from './category.types';

interface CategoriesReducerType {
	categories: ShopCategory[];
}

export const CATEGORIES_INITIAL_STATE = {
	categories: [],
	isLoading: false,
	error: null,
};

export const categoriesReducer = (
	state: CategoriesReducerType = CATEGORIES_INITIAL_STATE,
	action: { type: string; payload: any } = { type: '', payload: null }
) => {
	const { type, payload } = action;

	switch (type) {
		case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
			return { ...state, isLoading: true };
		case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
			return { ...state, categories: payload, isLoading: false };
		case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
			return { ...state, error: payload, isLoading: false };
		default:
			return state;
	}
};
