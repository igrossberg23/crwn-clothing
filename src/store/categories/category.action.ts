import type { UnknownAction } from 'redux';
import type { ShopCategory } from '../../types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';

export const setCategories = (categories: ShopCategory[]) =>
	createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories: ShopCategory[]) =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error: Error) =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch: any) => {
	dispatch(fetchCategoriesStart());
	try {
		const categoriesArray =
			(await getCategoriesAndDocuments()) as ShopCategory[];
		dispatch(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesFailed(error as Error));
	}
};
