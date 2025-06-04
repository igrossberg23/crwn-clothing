import { createSelector } from 'reselect';
import type { CategoriesMap, ShopCategory } from '../../types';

const selectCategoryReducer = (state: any) => state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) =>
		categories.reduce((acc: CategoriesMap, shopCategory: ShopCategory) => {
			const { title, items } = shopCategory;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);

// export const selectCategoriesMap = (state: any): CategoriesMap => {
// 	const categories = state.categories.categoriesMap;
// 	const categoryMap = categories.reduce(
// 		(acc: CategoriesMap, shopCategory: ShopCategory) => {
// 			const { title, items } = shopCategory;
// 			acc[title.toLowerCase()] = items;
// 			return acc;
// 		},
// 		{}
// 	);
// 	return categoryMap;
// };
