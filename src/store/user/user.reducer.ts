import type { NullableUser } from '../../types';
import { USER_ACTION_TYPES } from './user.types';

interface UserReducerType {
	currentUser: NullableUser;
}

export const INIT_USER_REDUCER = {
	currentUser: null,
};

export const userReducer = (
	state: UserReducerType = INIT_USER_REDUCER,
	action: { type: string; payload: NullableUser }
) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			return state;
	}
};
