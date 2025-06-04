import type { ShopCategory } from '../../types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';

export const setCategories = (categories: ShopCategory[]) =>
	createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categories);
