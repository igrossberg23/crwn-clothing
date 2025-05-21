import type { NullableUser } from '../../types';

interface UserReducerType {
	currentUser: NullableUser;
}

export const userReducer = (
	state: UserReducerType,
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
			throw new Error(`Unhandled type ${type} in userReducer`);
	}
};

export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const INIT_USER_REDUCER = {
	currentUser: null,
};
