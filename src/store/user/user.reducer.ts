import type { NullableUser } from '../../types';
import { USER_ACTION_TYPES } from './user.types';

interface UserReducerType {
	currentUser: NullableUser;
}

export const INIT_USER_REDUCER = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (
	state: UserReducerType = INIT_USER_REDUCER,
	action: { type: string; payload: NullableUser }
) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload,
			};
		case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
			};
		case USER_ACTION_TYPES.SIGN_UP_FAILED:
		case USER_ACTION_TYPES.SIGN_OUT_FAILED:
		case USER_ACTION_TYPES.SIGN_IN_FAILED:
			return {
				...state,
				error: payload,
			};

		default:
			return state;
	}
};
