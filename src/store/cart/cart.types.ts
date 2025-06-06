import { type CategoryItem } from '../categories/category.types';

export enum CART_ACTION_TYPES {
	TOGGLE_IS_CART_OPEN = 'cart/TOGGLE_IS_CART_OPEN',
	SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
}

export type CartItem = CategoryItem & {
	quantity: number;
};
