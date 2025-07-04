import { takeLatest, all, put, call } from 'typed-redux-saga';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {
	fetchCategoriesSuccess,
	fetchCategoriesFailed,
} from './category.action';
import { CATEGORY_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
	try {
		const categoriesArray = yield* call(getCategoriesAndDocuments);
		yield* put(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		yield* put(fetchCategoriesFailed(error as Error));
	}
}

export function* onFetchCategories() {
	yield* takeLatest(
		CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
		fetchCategoriesAsync
	);
}

export function* categoriesSaga() {
	yield* all([call(onFetchCategories)]);
}
